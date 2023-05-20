"use strict";
(self.webpackChunkdiscount_today = self.webpackChunkdiscount_today || []).push([
  [495],
  {
    8583: (e, r, s) => {
      s.d(r, { Z: () => o });
      var a = s(7537),
        i = s.n(a),
        t = s(3645),
        n = s.n(t)()(i());
      n.push([
        e.id,
        ".offer-card{width:30rem !important;height:20rem !important}.offer-card .card-group-border{border-radius:0 0 .375rem .375rem !important}.offer-card .card-group-border>.card:nth-child(1){border-radius:0 0 0 .375rem !important}.offer-card .card-group-border>.card:nth-child(2){border-radius:0 0 .375rem 0 !important}",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/views/SearchPage/OfferCard/OfferCard.scss",
          ],
          names: [],
          mappings:
            "AAAA,YACI,sBAAA,CACA,uBAAA,CAEA,+BACI,4CAAA,CAEA,kDACI,sCAAA,CAGJ,kDACI,sCAAA",
          sourcesContent: [
            ".offer-card {\n    width: 30rem !important;\n    height: 20rem !important;\n\n    .card-group-border {\n        border-radius: 0 0 .375rem .375rem !important;\n\n        & > .card:nth-child(1) {\n            border-radius: 0 0 0 .375rem !important;\n        }\n\n        & > .card:nth-child(2) {\n            border-radius: 0 0 .375rem 0 !important;\n        }\n    }\n}\n\n",
          ],
          sourceRoot: "",
        },
      ]);
      const o = n;
    },
    2207: (e, r, s) => {
      s.d(r, { Z: () => o });
      var a = s(7537),
        i = s.n(a),
        t = s(3645),
        n = s.n(t)()(i());
      n.push([
        e.id,
        ".main-spinner{width:10rem;height:10rem}",
        "",
        {
          version: 3,
          sources: ["webpack://./src/views/SearchPage/SearchPage.scss"],
          names: [],
          mappings: "AAAA,cACI,WAAA,CACA,YAAA",
          sourcesContent: [
            ".main-spinner {\n    width: 10rem;\n    height: 10rem;\n    //margin: 0px auto;\n}",
          ],
          sourceRoot: "",
        },
      ]);
      const o = n;
    },
    3459: (e, r, s) => {
      s.d(r, { Z: () => o });
      var a = s(7537),
        i = s.n(a),
        t = s(3645),
        n = s.n(t)()(i());
      n.push([
        e.id,
        ".sidebar.sidebar-sticky{height:100% !important}.sidebar-item-divider{height:1px;background-color:#fff}.sidebar-spinner{width:5rem;height:5rem;margin:0px auto}",
        "",
        {
          version: 3,
          sources: ["webpack://./src/views/SearchPage/SideBar/SideBar.scss"],
          names: [],
          mappings:
            "AAAA,wBACE,sBAAA,CAGF,sBACE,UAAA,CACA,qBAAA,CAGF,iBACE,UAAA,CACA,WAAA,CACA,eAAA",
          sourcesContent: [
            ".sidebar.sidebar-sticky {\n  height: 100% !important;\n}\n\n.sidebar-item-divider {\n  height: 1px;\n  background-color: white;\n}\n\n.sidebar-spinner {\n  width: 5rem;\n  height: 5rem;\n  margin: 0px auto;\n}",
          ],
          sourceRoot: "",
        },
      ]);
      const o = n;
    },
    6505: (e, r, s) => {
      s.d(r, { Z: () => h, C: () => f });
      var a = s(5893),
        i = s(7294),
        t = s(1893),
        n = s(5122);
      const o = { name: "Összes", id: "all" },
        c = {
          cities: ["Összes"],
          offers: [],
          storeTypes: [o],
          storeGroups: [o],
        },
        l = { city: "all", storeGroup: "all", storeType: "all" };
      var d = function (e, r, s, a) {
        return new (s || (s = Promise))(function (i, t) {
          function n(e) {
            try {
              c(a.next(e));
            } catch (e) {
              t(e);
            }
          }
          function o(e) {
            try {
              c(a.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function c(e) {
            var r;
            e.done
              ? i(e.value)
              : ((r = e.value),
                r instanceof s
                  ? r
                  : new s(function (e) {
                      e(r);
                    })).then(n, o);
          }
          c((a = a.apply(e, r || [])).next());
        });
      };
      const m = (0, i.createContext)({
          baseData: c,
          error: null,
          fetchOffers: () => {},
          isLoadingBaseData: !1,
        }),
        u = (e) =>
          d(void 0, void 0, void 0, function* () {
            return (yield t.y.get(e, {})).data;
          }),
        p = (e) =>
          d(void 0, void 0, void 0, function* () {
            const r = {
                city: "Összes" === e.city ? "all" : e.city,
                store_group: e.storeGroup,
                store_type: e.storeType,
              },
              s = yield t.y.post(n.Z.offers, JSON.stringify(r), {
                headers: { "Content-Type": "application/json" },
              });
            return console.log("response: ", s), s.data;
          }),
        h = ({ children: e }) => {
          const [r, s] = (0, i.useState)(c),
            [t, o] = (0, i.useState)(null),
            [h, f] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              f(!0),
                Promise.all([
                  u(n.Z.storeTypes),
                  u(n.Z.storeGroups),
                  u(n.Z.cities),
                  p(l),
                ])
                  .then((e) => {
                    console.info("responseData: ", e),
                      s({
                        storeTypes: [...c.storeTypes, ...e[0]],
                        storeGroups: [...c.storeGroups, ...e[1]],
                        cities: [...c.cities, ...e[2]],
                        offers: e[3],
                      }),
                      f(!1);
                  })
                  .catch((e) => {
                    console.error(e), f(!1), o(e);
                  });
            }, []),
            (0, a.jsx)(
              m.Provider,
              Object.assign(
                {
                  value: {
                    baseData: r,
                    error: t,
                    fetchOffers: (e) =>
                      d(void 0, void 0, void 0, function* () {
                        const r = yield p(e);
                        s((e) =>
                          Object.assign(Object.assign({}, e), { offers: r })
                        );
                      }),
                    isLoadingBaseData: h,
                  },
                },
                { children: e }
              )
            )
          );
        },
        f = m;
    },
    3495: (e, r, s) => {
      s.r(r), s.d(r, { default: () => E });
      var a = s(5893),
        i = s(7294),
        t = s(9250),
        n = s(4475),
        o = s(6505),
        c = s(3379),
        l = s.n(c),
        d = s(7795),
        m = s.n(d),
        u = s(569),
        p = s.n(u),
        h = s(3565),
        f = s.n(h),
        g = s(9216),
        b = s.n(g),
        A = s(4589),
        y = s.n(A),
        j = s(8583),
        x = {};
      (x.styleTagTransform = y()),
        (x.setAttributes = f()),
        (x.insert = p().bind(null, "head")),
        (x.domAPI = m()),
        (x.insertStyleElement = b()),
        l()(j.Z, x),
        j.Z && j.Z.locals && j.Z.locals;
      var v = s(2308),
        C = [
          "512 512",
          "<rect width='32' height='176' x='240' y='176' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='240' y='384' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M274.014,16H237.986L16,445.174V496H496V445.174ZM464,464H48V452.959L256,50.826,464,452.959Z' class='ci-primary'/>",
        ];
      const O = (e) => e.split("-").join("."),
        w = ({ offerData: e }) => {
          const {
            offer_name: r,
            description: s,
            exception: i,
            image: t,
            offer_href: o,
            valid_from: c,
            valid_to: l,
          } = e;
          return (0, a.jsxs)(
            n.xH,
            Object.assign(
              { className: "offer-card m-3" },
              {
                children: [
                  (0, a.jsx)(n.bn, { children: r }),
                  (0, a.jsxs)(
                    n.dL,
                    Object.assign(
                      { className: "card-group-border" },
                      {
                        children: [
                          (0, a.jsx)(
                            n.xH,
                            Object.assign(
                              { className: "p-4 flex-fill" },
                              { children: (0, a.jsx)(n.pX, { src: t }) }
                            )
                          ),
                          (0, a.jsx)(
                            n.xH,
                            Object.assign(
                              {
                                className: "text-white bg-success py-2",
                                style: { width: "11rem", flex: "unset" },
                              },
                              {
                                children: (0, a.jsxs)(
                                  n.sl,
                                  Object.assign(
                                    { className: "text-truncate" },
                                    {
                                      children: [
                                        (0, a.jsx)(n.uS, {
                                          children: `${O(c)} - ${O(l)}`,
                                        }),
                                        (0, a.jsx)(n.uS, { children: s }),
                                        i &&
                                          (0, a.jsxs)(
                                            n.uS,
                                            Object.assign(
                                              { className: "text-danger" },
                                              {
                                                children: [
                                                  (0, a.jsx)(v.Z, {
                                                    icon: C,
                                                    className: "me-2",
                                                  }),
                                                  i,
                                                ],
                                              }
                                            )
                                          ),
                                        (0, a.jsx)(
                                          n.u5,
                                          Object.assign(
                                            {
                                              color: "warning",
                                              className: "px-4",
                                              href: o,
                                            },
                                            { children: "Érdekel!" }
                                          )
                                        ),
                                      ],
                                    }
                                  )
                                ),
                              }
                            )
                          ),
                        ],
                      }
                    )
                  ),
                ],
              }
            )
          );
        };
      var Z = [
          "512 512",
          "<circle cx='309.912' cy='82.088' r='34.088' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M322,143.462l-60.585-20.64L183.8,151.048A24.073,24.073,0,0,0,168,173.6V232h32V179.207l48.811-17.749L158.622,440h33.613l50.082-155.811,7.871,2.568L288,356.079V440h32V354.04a24.068,24.068,0,0,0-2.931-11.493l-37.56-68.861,28.949-88.715,19.27,34.684A24.011,24.011,0,0,0,348.707,232H400V200H353.414Z' class='ci-primary'/>",
        ],
        N = [
          "512 512",
          "<rect width='288' height='32' x='184' y='80' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='288' height='32' x='184' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='288' height='32' x='184' y='400' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='120 160 120 40 56 40 56 72 88 72 88 160 120 160' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='56 262.111 56 312 136 312 136 280 91.777 280 136 257.889 136 192 56 192 56 224 104 224 104 238.111 56 262.111' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='56 440 56 472 136 472 136 344 56 344 56 376 104 376 104 392 80 392 80 424 104 424 104 440 56 440' class='ci-primary'/>",
        ],
        L = [
          "512 512",
          "<path fill='var(--ci-primary-color, currentColor)' d='M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z' class='ci-primary'/>",
        ],
        T = s(9430),
        k = s(3459),
        S = {};
      (S.styleTagTransform = y()),
        (S.setAttributes = f()),
        (S.insert = p().bind(null, "head")),
        (S.domAPI = m()),
        (S.insertStyleElement = b()),
        l()(k.Z, S),
        k.Z && k.Z.locals && k.Z.locals;
      const B = ({ sidebarShow: e }) => {
        const {
            baseData: r,
            fetchOffers: s,
            isLoadingBaseData: t,
          } = (0, i.useContext)(o.C),
          { cities: c, storeGroups: l, storeTypes: d } = r;
        console.log("baseData: ", r);
        const m = { city: c[0], storeType: d[0], storeGroup: l[0] },
          [u, p] = (0, i.useState)(m);
        console.log("searchConditions: ", u);
        const { isLoggedIn: h } = (0, T.Z)();
        return (
          (0, i.useEffect)(() => {
            s({
              city: u.city,
              storeType: u.storeType.id,
              storeGroup: u.storeGroup.id,
            });
          }, [u.city, u.storeType.id, u.storeGroup.id]),
          (0, a.jsxs)(
            n.z3,
            Object.assign(
              {
                className: "p-3",
                color: "dark",
                position: "sticky",
                unfoldable: !1,
                visible: e,
                onVisibleChange: () => {},
              },
              {
                children: [
                  t
                    ? (0, a.jsx)(n.LQ, {
                        className: "sidebar-spinner",
                        color: "info",
                        variant: "grow",
                      })
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsxs)(
                            n.j3,
                            Object.assign(
                              { className: "mb-3" },
                              {
                                children: [
                                  (0, a.jsx)(
                                    n.LX,
                                    Object.assign(
                                      {
                                        "aria-label": "Település-választó",
                                        id: "city-selector",
                                        onChange: (e) => {
                                          var r;
                                          return ((e) => {
                                            const r =
                                              null == c
                                                ? void 0
                                                : c.find((r) => r === e);
                                            p((e) =>
                                              Object.assign(
                                                Object.assign({}, e),
                                                { city: r }
                                              )
                                            );
                                          })(
                                            null === (r = e.currentTarget) ||
                                              void 0 === r
                                              ? void 0
                                              : r.value
                                          );
                                        },
                                        value: u.city,
                                      },
                                      {
                                        children: c.map((e, r) =>
                                          (0, a.jsx)(
                                            "option",
                                            Object.assign(
                                              { value: e },
                                              { children: e }
                                            ),
                                            `city-${r}`
                                          )
                                        ),
                                      }
                                    )
                                  ),
                                  (0, a.jsx)(
                                    n.L8,
                                    Object.assign(
                                      {
                                        className: "text-dark",
                                        htmlFor: "city-selector",
                                      },
                                      { children: "Település" }
                                    )
                                  ),
                                ],
                              }
                            )
                          ),
                          (0, a.jsxs)(
                            n.j3,
                            Object.assign(
                              { className: "mb-3" },
                              {
                                children: [
                                  (0, a.jsx)(
                                    n.LX,
                                    Object.assign(
                                      {
                                        "aria-label": "Bolttípus-választó",
                                        id: "store-or-restaurant",
                                        onChange: (e) => {
                                          var r;
                                          return ((e) => {
                                            const r =
                                              null == d
                                                ? void 0
                                                : d.find(
                                                    (r) => String(r.id) === e
                                                  );
                                            p((e) =>
                                              Object.assign(
                                                Object.assign({}, e),
                                                { storeType: r }
                                              )
                                            );
                                          })(
                                            null === (r = e.currentTarget) ||
                                              void 0 === r
                                              ? void 0
                                              : r.value
                                          );
                                        },
                                        value: u.storeType.id,
                                      },
                                      {
                                        children:
                                          null == d
                                            ? void 0
                                            : d.map((e) =>
                                                (0, a.jsx)(
                                                  "option",
                                                  Object.assign(
                                                    { value: e.id },
                                                    { children: e.name }
                                                  ),
                                                  `store-type-${e.id}`
                                                )
                                              ),
                                      }
                                    )
                                  ),
                                  (0, a.jsx)(
                                    n.L8,
                                    Object.assign(
                                      {
                                        className: "text-dark",
                                        htmlFor: "store-or-restaurant",
                                      },
                                      { children: "Bolttípus" }
                                    )
                                  ),
                                ],
                              }
                            )
                          ),
                          (0, a.jsxs)(
                            n.j3,
                            Object.assign(
                              { className: "mb-3" },
                              {
                                children: [
                                  (0, a.jsx)(
                                    n.LX,
                                    Object.assign(
                                      {
                                        "aria-label": "Bolthálózat-választó",
                                        id: "store-group-selector",
                                        onChange: (e) => {
                                          var r;
                                          return ((e) => {
                                            const r =
                                              null == l
                                                ? void 0
                                                : l.find(
                                                    (r) => String(r.id) === e
                                                  );
                                            p((e) =>
                                              Object.assign(
                                                Object.assign({}, e),
                                                { storeGroup: r }
                                              )
                                            );
                                          })(
                                            null === (r = e.currentTarget) ||
                                              void 0 === r
                                              ? void 0
                                              : r.value
                                          );
                                        },
                                        value: u.storeGroup.id,
                                      },
                                      {
                                        children: l.map((e, r) =>
                                          (0, a.jsx)(
                                            "option",
                                            Object.assign(
                                              { value: e.id },
                                              { children: e.name }
                                            ),
                                            `store-group-${r}`
                                          )
                                        ),
                                      }
                                    )
                                  ),
                                  (0, a.jsx)(
                                    n.L8,
                                    Object.assign(
                                      {
                                        className: "text-dark",
                                        htmlFor: "shop-selector",
                                      },
                                      { children: "Bolthálózat" }
                                    )
                                  ),
                                ],
                              }
                            )
                          ),
                          (0, a.jsx)(n.lK, {
                            className: "sidebar-item-divider mb-3",
                          }),
                          (0, a.jsxs)(
                            n.u5,
                            Object.assign(
                              { className: "mb-3" },
                              {
                                children: [
                                  (0, a.jsx)(v.Z, {
                                    icon: Z,
                                    className: "me-2",
                                  }),
                                  "Mutasd a legközelebbit!",
                                ],
                              }
                            )
                          ),
                          (0, a.jsxs)(
                            n.u5,
                            Object.assign(
                              { className: "mb-3" },
                              {
                                children: [
                                  (0, a.jsx)(v.Z, {
                                    icon: N,
                                    className: "me-2",
                                  }),
                                  "Top5 akció",
                                ],
                              }
                            )
                          ),
                        ],
                      }),
                  h &&
                    (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)(
                        n.u5,
                        Object.assign(
                          { className: "mb-3" },
                          {
                            children: [
                              (0, a.jsx)(v.Z, { icon: L, className: "me-2" }),
                              "Kedvenceim",
                            ],
                          }
                        )
                      ),
                    }),
                ],
              }
            )
          )
        );
      };
      var G = s(4164),
        D = s(2207),
        z = {};
      (z.styleTagTransform = y()),
        (z.setAttributes = f()),
        (z.insert = p().bind(null, "head")),
        (z.domAPI = m()),
        (z.insertStyleElement = b()),
        l()(D.Z, z),
        D.Z && D.Z.locals && D.Z.locals;
      const E = () => {
        const { sidebarVisible: e } = (0, t.bx)(),
          { baseData: r, isLoadingBaseData: s } = (0, i.useContext)(o.C),
          { offers: c } = r;
        return (0, a.jsxs)(
          "div",
          Object.assign(
            { className: "flex-fill d-flex overflow-auto" },
            {
              children: [
                (0, a.jsx)(B, { sidebarShow: e }),
                (0, a.jsxs)(
                  "main",
                  Object.assign(
                    { className: "flex-fill d-flex flex-column" },
                    {
                      children: [
                        (0, a.jsx)(
                          n.KB,
                          Object.assign(
                            {
                              lg: !0,
                              className:
                                "flex-fill d-flex justify-content-center flex-wrap",
                            },
                            {
                              children: s
                                ? (0, a.jsx)(n.LQ, {
                                    className: "main-spinner",
                                    color: "info",
                                    variant: "grow",
                                  })
                                : c.map((e, r) =>
                                    (0, a.jsx)(
                                      w,
                                      { offerData: e },
                                      `offer-${r}`
                                    )
                                  ),
                            }
                          )
                        ),
                        (0, a.jsx)(G.$_, {}),
                      ],
                    }
                  )
                ),
              ],
            }
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=495.bundle.js.map
