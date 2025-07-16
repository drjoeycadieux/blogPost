import {
  require_db,
  require_node
} from "/build/_shared/chunk-6E6SEABQ.js";
import {
  Form
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

// app/routes/posts.new.tsx
var import_node = __toESM(require_node(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\posts.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\posts.new.tsx"
  );
  import.meta.hot.lastModified = "1752660412759.9336";
}
function NewPost() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100 dark:bg-gray-900 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8", children: "Create New Post" }, void 0, false, {
      fileName: "app/routes/posts.new.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Title" }, void 0, false, {
          fileName: "app/routes/posts.new.tsx",
          lineNumber: 51,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", id: "title", required: true, className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white" }, void 0, false, {
          fileName: "app/routes/posts.new.tsx",
          lineNumber: 54,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/posts.new.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "content", className: "block text-sm font-medium text-gray-700 dark:text-gray-300", children: "Content" }, void 0, false, {
          fileName: "app/routes/posts.new.tsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "content", id: "content", required: true, rows: 10, className: "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white" }, void 0, false, {
          fileName: "app/routes/posts.new.tsx",
          lineNumber: 61,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/posts.new.tsx",
        lineNumber: 57,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "inline-block px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/posts.new.tsx",
          lineNumber: 65,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "inline-block bg-blue-600 px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2", children: "Create Post" }, void 0, false, {
          fileName: "app/routes/posts.new.tsx",
          lineNumber: 68,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/posts.new.tsx",
        lineNumber: 64,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/posts.new.tsx",
      lineNumber: 49,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts.new.tsx",
    lineNumber: 44,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/posts.new.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c = NewPost;
var _c;
$RefreshReg$(_c, "NewPost");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/posts.new-6WWJ4AVQ.js.map
