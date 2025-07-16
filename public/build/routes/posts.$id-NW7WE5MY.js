import {
  require_db,
  require_node
} from "/build/_shared/chunk-6E6SEABQ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-JBZ3PATB.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  createHotContext
} from "/build/_shared/chunk-MDU43NFL.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/posts.$id.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\posts.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\posts.$id.tsx"
  );
  import.meta.hot.lastModified = "1752660412765.9915";
}
function Post() {
  _s();
  const {
    post
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "max-w-3xl mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4", children: post.title }, void 0, false, {
        fileName: "app/routes/posts.$id.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: new Date(post.createdAt).toLocaleDateString() }, void 0, false, {
        fileName: "app/routes/posts.$id.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "prose dark:prose-invert max-w-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-md p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-800 dark:text-gray-200 whitespace-pre-wrap", children: post.content }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 60,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 59,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 58,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "text-blue-600 dark:text-blue-400 hover:underline", children: "\u2190 Back to all posts" }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 67,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/posts.$id.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.$id.tsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/posts.$id.tsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
}
_s(Post, "XKKHaSRpeA70aITHb2nxIAbZ33A=", false, function() {
  return [useLoaderData];
});
_c = Post;
var _c;
$RefreshReg$(_c, "Post");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Post as default
};
//# sourceMappingURL=/build/routes/posts.$id-NW7WE5MY.js.map
