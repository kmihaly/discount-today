"use strict";
(self.webpackChunkdiscount_today = self.webpackChunkdiscount_today || []).push([
  [777],
  {
    6505: (e, s, t) => {
      t.d(s, { Z: () => y, C: () => v });
      var o = t(5893),
        n = t(7294),
        r = t(1893),
        a = t(5122);
      const i = { name: "Összes", id: "all" },
        c = {
          cities: ["Összes"],
          offers: [],
          storeTypes: [i],
          storeGroups: [i],
        },
        l = { city: "all", storeGroup: "all", storeType: "all" };
      var u = function (e, s, t, o) {
        return new (t || (t = Promise))(function (n, r) {
          function a(e) {
            try {
              c(o.next(e));
            } catch (e) {
              r(e);
            }
          }
          function i(e) {
            try {
              c(o.throw(e));
            } catch (e) {
              r(e);
            }
          }
          function c(e) {
            var s;
            e.done
              ? n(e.value)
              : ((s = e.value),
                s instanceof t
                  ? s
                  : new t(function (e) {
                      e(s);
                    })).then(a, i);
          }
          c((o = o.apply(e, s || [])).next());
        });
      };
      const d = (0, n.createContext)({
          baseData: c,
          error: null,
          fetchOffers: () => {},
          isLoadingBaseData: !1,
        }),
        f = (e) =>
          u(void 0, void 0, void 0, function* () {
            return (yield r.y.get(e, {})).data;
          }),
        p = (e) =>
          u(void 0, void 0, void 0, function* () {
            const s = {
                city: "Összes" === e.city ? "all" : e.city,
                store_group: e.storeGroup,
                store_type: e.storeType,
              },
              t = yield r.y.post(a.Z.offers, JSON.stringify(s), {
                headers: { "Content-Type": "application/json" },
              });
            return console.log("response: ", t), t.data;
          }),
        y = ({ children: e }) => {
          const [s, t] = (0, n.useState)(c),
            [r, i] = (0, n.useState)(null),
            [y, v] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              v(!0),
                Promise.all([
                  f(a.Z.storeTypes),
                  f(a.Z.storeGroups),
                  f(a.Z.cities),
                  p(l),
                ])
                  .then((e) => {
                    console.info("responseData: ", e),
                      t({
                        storeTypes: [...c.storeTypes, ...e[0]],
                        storeGroups: [...c.storeGroups, ...e[1]],
                        cities: [...c.cities, ...e[2]],
                        offers: e[3],
                      }),
                      v(!1);
                  })
                  .catch((e) => {
                    console.error(e), v(!1), i(e);
                  });
            }, []),
            (0, o.jsx)(
              d.Provider,
              Object.assign(
                {
                  value: {
                    baseData: s,
                    error: r,
                    fetchOffers: (e) =>
                      u(void 0, void 0, void 0, function* () {
                        const s = yield p(e);
                        t((e) =>
                          Object.assign(Object.assign({}, e), { offers: s })
                        );
                      }),
                    isLoadingBaseData: y,
                  },
                },
                { children: e }
              )
            )
          );
        },
        v = d;
    },
    6368: (e, s, t) => {
      t.r(s), t.d(s, { default: () => u });
      var o = t(5893),
        n = t(7294),
        r = t(9250),
        a = t(4164),
        i = t(1247),
        c = (t(7788), t(6505));
      const l = {
          [i.o.login]: !1,
          [i.o.userData]: !1,
          [i.o.preferences]: !1,
          [i.o.registration]: !1,
        },
        u = () => {
          const [e, s] = (0, n.useState)(!1),
            [t, i] = (0, n.useState)(l),
            u = (0, n.useCallback)(() => i(l), []),
            d = (0, n.useCallback)((e) => {
              i(Object.assign(Object.assign({}, l), { [e]: !0 }));
            }, []);
          return (0, o.jsxs)(c.Z, {
            children: [
              (0, o.jsxs)(
                "div",
                Object.assign(
                  {
                    className: "wrapper d-flex flex-column min-vh-100 bg-light",
                  },
                  {
                    children: [
                      (0, o.jsx)(a.W_, {
                        openModal: d,
                        toggleSidebar: (t) => {
                          s("boolean" != typeof t ? !e : t);
                        },
                      }),
                      (0, o.jsx)(r.j3, {
                        context: { openModal: d, sidebarVisible: e },
                      }),
                    ],
                  }
                )
              ),
              (0, o.jsx)(a.Lu, { modalsVisibility: t, closeModal: u }),
            ],
          });
        };
    },
  },
]);
//# sourceMappingURL=777.bundle.js.map
