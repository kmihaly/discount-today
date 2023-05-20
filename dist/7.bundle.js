"use strict";
(self.webpackChunkdiscount_today = self.webpackChunkdiscount_today || []).push([
  [7],
  {
    8467: (s, e, n) => {
      n.d(e, { Z: () => l });
      var a = n(7537),
        c = n.n(a),
        r = n(3645),
        t = n.n(r)()(c());
      t.push([
        s.id,
        ".action-card{cursor:pointer;text-decoration:none;color:rgba(255,255,255,.87)}.action-card>div:hover{box-shadow:rgba(0,0,0,.25) 0px 54px 55px,rgba(0,0,0,.12) 0px -12px 30px,rgba(0,0,0,.12) 0px 4px 6px,rgba(0,0,0,.17) 0px 12px 13px,rgba(0,0,0,.09) 0px -3px 5px;color:rgba(255,255,255,.87)}.action-card:active,.action-card:link{color:rgba(255,255,255,.87)}.action-card .card-body>.card-title{text-align:center}",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/views/LandingPage/ActionCard/ActionCard.scss",
          ],
          names: [],
          mappings:
            "AAAA,aACE,cAAA,CACA,oBAAA,CACA,2BAAA,CAIE,uBACE,8JAAA,CAGA,2BAAA,CAIJ,sCAEE,2BAAA,CAGF,oCACE,iBAAA",
          sourcesContent: [
            ".action-card {\n  cursor: pointer;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.87);\n\n  &>div {\n\n    &:hover {\n      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,\n        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,\n        rgba(0, 0, 0, 0.09) 0px -3px 5px;\n      color: rgba(255, 255, 255, 0.87);\n    }\n  }\n\n  &:active,\n  &:link {\n    color: rgba(255, 255, 255, 0.87);\n  }\n\n  .card-body>.card-title {\n    text-align: center;\n  }\n}",
          ],
          sourceRoot: "",
        },
      ]);
      const l = t;
    },
    6007: (s, e, n) => {
      n.r(e), n.d(e, { default: () => v });
      var a = n(5893),
        c = n(7294),
        r = n(4164),
        t = n(4475),
        l = n(9655),
        i = n(3379),
        x = n.n(i),
        o = n(7795),
        d = n.n(o),
        A = n(569),
        b = n.n(A),
        g = n(3565),
        p = n.n(g),
        h = n(9216),
        j = n.n(h),
        m = n(4589),
        f = n.n(m),
        u = n(8467),
        C = {};
      (C.styleTagTransform = f()),
        (C.setAttributes = p()),
        (C.insert = b().bind(null, "head")),
        (C.domAPI = d()),
        (C.insertStyleElement = j()),
        x()(u.Z, C),
        u.Z && u.Z.locals && u.Z.locals;
      const O = ({ className: s, href: e, title: n }) =>
          (0, a.jsx)(
            l.OL,
            Object.assign(
              { to: e, className: "action-card" },
              {
                children: (0, a.jsx)(
                  t.xH,
                  Object.assign(
                    { className: `mt-3 ${s}`, style: { height: "25rem" } },
                    {
                      children: (0, a.jsx)(
                        t.sl,
                        Object.assign(
                          {
                            className:
                              "d-flex justify-content-center align-items-center",
                          },
                          { children: (0, a.jsx)(t.tj, { children: n }) }
                        )
                      ),
                    }
                  )
                ),
              }
            )
          ),
        v = () =>
          (0, a.jsx)(
            c.Suspense,
            Object.assign(
              { fallback: (0, a.jsx)(r.wY, {}) },
              {
                children: (0, a.jsxs)(
                  "div",
                  Object.assign(
                    { className: "flex-fill d-flex flex-column" },
                    {
                      children: [
                        (0, a.jsxs)(
                          "main",
                          Object.assign(
                            { className: "flex-fill d-flex flex-column" },
                            {
                              children: [
                                (0, a.jsx)(
                                  t.KB,
                                  Object.assign(
                                    { lg: !0, className: "flex-fill" },
                                    {
                                      children: (0, a.jsxs)(t.rb, {
                                        children: [
                                          (0, a.jsx)(
                                            t.b7,
                                            Object.assign(
                                              { xs: 12, md: 6, lg: 4 },
                                              {
                                                children: (0, a.jsx)(O, {
                                                  className: "bg-info",
                                                  title:
                                                    "ÉLELMISZERÁRUHÁZAK AKCIÓI",
                                                  href: "/search",
                                                }),
                                              }
                                            )
                                          ),
                                          (0, a.jsx)(
                                            t.b7,
                                            Object.assign(
                                              { xs: 12, md: 6, lg: 4 },
                                              {
                                                children: (0, a.jsx)(O, {
                                                  className: "bg-warning",
                                                  title: "GYORSÉTTERMEK AKCIÓI",
                                                  href: "/search",
                                                }),
                                              }
                                            )
                                          ),
                                          (0, a.jsx)(
                                            t.b7,
                                            Object.assign(
                                              { xs: 12, md: 6, lg: 4 },
                                              {
                                                children: (0, a.jsx)(O, {
                                                  className: "bg-success",
                                                  title: "NAPI TOP 5 AKCIÓ",
                                                  href: "/search",
                                                }),
                                              }
                                            )
                                          ),
                                        ],
                                      }),
                                    }
                                  )
                                ),
                                (0, a.jsx)(r.Js, {}),
                              ],
                            }
                          )
                        ),
                        (0, a.jsx)(r.$_, {}),
                      ],
                    }
                  )
                ),
              }
            )
          );
    },
  },
]);
//# sourceMappingURL=7.bundle.js.map
