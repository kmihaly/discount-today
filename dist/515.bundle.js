"use strict";
(self.webpackChunkdiscount_today = self.webpackChunkdiscount_today || []).push([
  [515],
  {
    1515: (e, t, a) => {
      a.r(t), a.d(t, { default: () => u });
      var n = a(7294),
        l = a(9250),
        c = a(9252),
        r = a(1247);
      const u = function () {
        var e = (0, n.useState)(!1),
          t = e[0],
          a = e[1],
          u = (0, n.useRef)(r.o.registration),
          o = (0, n.useCallback)(function (e) {
            return (u.current = r.o[e]), a(!0), !1;
          }, []);
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            "div",
            { className: "wrapper d-flex flex-column min-vh-100 bg-light" },
            n.createElement(c.W_, { activateModal: o }),
            n.createElement(l.j3, { context: { activateModal: o } })
          ),
          n.createElement(c.HQ, {
            modalVisible: t,
            closeModal: function () {
              return a(!1);
            },
            typeRef: u,
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTE1LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoieUxBa0JBLFFBZG9CLFdBQ2hCLElBQUlBLEdBQUssSUFBQUMsV0FBUyxHQUFRQyxFQUFlRixFQUFHLEdBQUlHLEVBQWtCSCxFQUFHLEdBQ2pFSSxHQUFlLElBQUFDLFFBQU8sa0JBQ3RCQyxHQUFnQixJQUFBQyxjQUFZLFNBQVVDLEdBR3RDLE9BRkFKLEVBQWFLLFFBQVUsSUFBVUQsR0FDakNMLEdBQWdCLElBQ1QsQ0FDWCxHQUFHLElBQ0gsT0FBUSxnQkFBb0IsV0FBZ0IsS0FDeEMsZ0JBQW9CLE1BQU8sQ0FBRU8sVUFBVyxrREFDcEMsZ0JBQW9CLEtBQVksQ0FBRUosY0FBZUEsSUFDakQsZ0JBQW9CLEtBQVEsQ0FBRUssUUFBUyxDQUFFTCxjQUFlQSxNQUM1RCxnQkFBb0IsS0FBZSxDQUFFSixhQUFjQSxFQUFjVSxXQUFZLFdBQWMsT0FBT1QsR0FBZ0IsRUFBUSxFQUFHVSxRQUFTVCxJQUM5SSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGlzY291bnRfdG9kYXkvLi9zcmMvbGF5b3V0L0RlZmF1bHRMYXlvdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IE5hdmlnYXRpb24sIE1vZGFsU2VsZWN0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTW9kYWxFbnVtIH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcbnZhciBEZWZhdWx0TGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSA9IHVzZVN0YXRlKGZhbHNlKSwgbW9kYWxWaXNpYmxlID0gX2FbMF0sIHNldE1vZGFsVmlzaWJsZSA9IF9hWzFdO1xuICAgIHZhciBtb2RhbFR5cGVSZWYgPSB1c2VSZWYoTW9kYWxFbnVtLnJlZ2lzdHJhdGlvbik7XG4gICAgdmFyIGFjdGl2YXRlTW9kYWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobW9kYWxUeXBlKSB7XG4gICAgICAgIG1vZGFsVHlwZVJlZi5jdXJyZW50ID0gTW9kYWxFbnVtW21vZGFsVHlwZV07XG4gICAgICAgIHNldE1vZGFsVmlzaWJsZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwid3JhcHBlciBkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMCBiZy1saWdodFwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb24sIHsgYWN0aXZhdGVNb2RhbDogYWN0aXZhdGVNb2RhbCB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0bGV0LCB7IGNvbnRleHQ6IHsgYWN0aXZhdGVNb2RhbDogYWN0aXZhdGVNb2RhbCB9IH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbFNlbGVjdG9yLCB7IG1vZGFsVmlzaWJsZTogbW9kYWxWaXNpYmxlLCBjbG9zZU1vZGFsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXRNb2RhbFZpc2libGUoZmFsc2UpOyB9LCB0eXBlUmVmOiBtb2RhbFR5cGVSZWYgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0TGF5b3V0O1xuIl0sIm5hbWVzIjpbIl9hIiwidXNlU3RhdGUiLCJtb2RhbFZpc2libGUiLCJzZXRNb2RhbFZpc2libGUiLCJtb2RhbFR5cGVSZWYiLCJ1c2VSZWYiLCJhY3RpdmF0ZU1vZGFsIiwidXNlQ2FsbGJhY2siLCJtb2RhbFR5cGUiLCJjdXJyZW50IiwiY2xhc3NOYW1lIiwiY29udGV4dCIsImNsb3NlTW9kYWwiLCJ0eXBlUmVmIl0sInNvdXJjZVJvb3QiOiIifQ==
