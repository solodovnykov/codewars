// n this kata you will create an object which can execute a query written in a simplified form of Structured Query Language (SQL) against a simple database.

// Simplified SQL
// We will be using a greatly simplified version of SQL. Your query engine will need to handle SQL queries comprising only the following:

// A SELECT clause, with any number of columns,
// A FROM clause, which identifies the primary table to select records from,
// Any number of optional JOIN clauses which join another table to the table identified by the FROM clause, all of which will be treated as INNER JOINs.
// An optional WHERE clause with only one condition.
// For clarity, here are some common SQL features you will NOT need to support

// Aliases (AS or [bracketed names]),
// CASTing,
// ORDER BY, GROUP BY, COUNT, or EXISTS,
// IN or LIKE, or any other operator other than simple equality, inequality and greater than/less than,
// AND or OR; only a single WHERE condition is allowed
// All table and column names will be simple strings with no spaces. Constant strings will be written in normal SQL format, with single quotes and escaping internal single quotes by doubling them (for example, 'a ''string'' containing quotes'). For values, Haskell will use string constants only; numerical strings will, when necessary, have leading zeroes for correct ordering.

// Here is an EBNF grammar of the SQL queries you will need to be able to handle.

// query         =  select, ws, from, [ ws, join ], [ ws, where ] ;
// select        =  "SELECT ", column-id, [ { ", ", column-id } ] ;
// from          =  "FROM ", table-name, [ { ws, join } ] ;
// join          =  "JOIN ", table-name, " on ", value-test ;
// where         =  "WHERE ", value-test ;
// value-test    =  value, comparison, value;
// column-id     =  table-name, ".", column-name ;
// table-name    = ? a valid SQL table name ? ;
// column-name   = ? a valid SQL column name ? ;
// value         =  column-id | const
// comparison    =  " = " | " > " | " < " | " <= " | " >= " | " <> " ;
// const         =  ? a number ? | ? a SQL single-quoted string ? ;
// ws            = " " | "\n" | ws, ws ;
// Note that SQL is not case sensitive; SELECT and select are equivalent.

// For this kata, a "valid SQL table/column name" is a name containing only letters, numbers, and the '_' character, with no spaces (represented in JS RegExp as /[a-zA-Z0-9_]+/).



// Lexical Analysis

const getLexeme = (source) => {
  let tokens = [];

  const templates = {
    keyword: /^(?:SELECT|FROM|JOIN|ON|WHERE)\b/i,
    number: /^-?\d+(?:\.\d+)?/,
    string: /^(?:'[^']*')+/,
    punct: /^[.,]/,
    name: /^[0-9A-Za-z_]+/,
    cmp: /^(?:<=|>=|<>|<|>|=)/,
    space: /^\s+/,
  };

  for (const type in templates) {
    if ((tokens = source.match(templates[type]))) {
      return tokens.map((value) => ({ type, value }))[0];
    }
  }

  return false;
};

const tokenizing = (source) => {
  let tokens = [];
  let token = {
    value: "",
    type: "",
  };

  while ((token = getLexeme(source))) {
    source = source.replace(new RegExp("^" + token.value, "i"), "").trim();

    if (token.type == "keyword") {
      token.value = token.value.toUpperCase();
    }
    if (token.type == "string") {
      token.value = token.value
        .substr(1, token.value.length - 2)
        .replace("''", "'");
    }
    tokens.push(token);
  }

  return tokens;
};

// Syntax Analysis

const parse = (tokens) => {
  let pointer = 0;

  let table = "";
  let columns = [];
  let joins = [];
  let where = [];

  const error = (msg) => {
    throw new Error(msg);
  };

  const peek = () => {
    return tokens[pointer];
  };

  const next = () => {
    return tokens[pointer++];
  };

  const match = (token) => {
    return peek() && peek().value == token;
  };

  const expect = (token) => {
    return (
      (peek().value == token && next()) ||
      error("Expect keyword " + token + " instead got" + peek().value)
    );
  };

  const expectType = (t) => {
    return (
      (peek().type == t && next()) ||
      error("Expect type " + t + " instead got" + peek().type)
    );
  };

  const getColumnName = () => {
    return {
      type: "column",
      value:
        expectType("name").value +
        expectType("punct").value +
        expectType("name").value,
    };
  };

  const getName = () => {
    return expectType("name").value;
  };

  const getField = () => {
    if (["number", "string"].includes(peek().type)) {
      return next();
    }

    return getColumnName();
  };

  const getCondition = () => {
    return {
      leftSide: getColumnName(),
      sign: expectType("cmp").value,
      rightSide: getField(),
    };
  };

  if (expect("SELECT")) {
    columns.push(getColumnName());

    while (match(",")) {
      next();
      columns.push(getColumnName());
    }
  }

  if (expect("FROM")) {
    table = getName();
    while (match("JOIN")) {
      next();
      joins.push({
        table: getName(),
        condition: expect("ON") && getCondition(),
      });
    }
  }

  if (match("WHERE")) {
    next();
    where.push(getCondition());
  }

  return { columns, table, joins, where };
};

// Engine

const engine = (db, q) => {
  const normalize = (t) =>
    db[t].map((row) => {
      r = {};
      for (key in row) r[`${t}.${key}`] = row[key];
      return r;
    });
  const columnName = (c) => c.value;

  const cmp = {
    "=": (a, b) => a == b,
    ">": (a, b) => a > b,
    ">=": (a, b) => a >= b,
    "<": (a, b) => a < b,
    "<=": (a, b) => a <= b,
    "<>": (a, b) => a != b,
  };

  const getValue = (token, row) => {
    if (["string", "number"].includes(token.type)) {
      return token.value;
    }
    if (token.type == "column") {
      return row[token.value];
    }
    throw new Error("Expect variable");
  };

  const combine = (row1, row2) => {
    return Object.assign({}, row1, row2);
  };
  const f = (row, cnd) => {
    return cmp[cnd.sign](
      getValue(cnd.leftSide, row),
      getValue(cnd.rightSide, row)
    );
  };
  const leftJoin = (table1, table2, cnd) => {
    let r = [];
    table1.forEach((row1) => {
      table2.forEach((row2) => {
        r.push(combine(row1, row2));
      });
    });

    return r.filter((row) => f(row, cnd));
  };

  let result = normalize(q.table);

  if (q.joins.length > 0) {
    q.joins.forEach((t) => {
      result = leftJoin(result, normalize(t.table), t.condition);
    });
  }

  if (q.where.length == 1) {
    result = result.filter((row) => f(row, q.where[0]));
  }

  return result.map((row) => {
    r = {};
    q.columns.map((col) => {
      r[columnName(col)] = row[columnName(col)];
    });
    return r;
  });
};

function SQLEngine(database) {
  this.execute = function (query) {
    const tokens = tokenizing(query);
    const q = parse(tokens);
    return engine(database, q);
  };
}
