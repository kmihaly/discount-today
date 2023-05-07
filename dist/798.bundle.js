"use strict";
(self.webpackChunkdiscount_today = self.webpackChunkdiscount_today || []).push([
  [798],
  {
    746: (e, l, a) => {
      a.d(l, { Z: () => i });
      var r = a(7537),
        t = a.n(r),
        n = a(3645),
        c = a.n(n)()(t());
      c.push([
        e.id,
        ".nav-item{margin-bottom:0}",
        "",
        {
          version: 3,
          sources: [
            "webpack://./src/views/SearchPage/SearchBar/SearchBar.scss",
          ],
          names: [],
          mappings: "AAAA,UACI,eAAA",
          sourcesContent: [".nav-item {\n    margin-bottom: 0;\n}"],
          sourceRoot: "",
        },
      ]);
      const i = c;
    },
    9798: (e, l, a) => {
      a.r(l), a.d(l, { default: () => N });
      var r = a(7294),
        t = a(4475),
        n = a(9252),
        c = a(2308),
        i = [
          "512 512",
          "<circle cx='309.912' cy='82.088' r='34.088' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M322,143.462l-60.585-20.64L183.8,151.048A24.073,24.073,0,0,0,168,173.6V232h32V179.207l48.811-17.749L158.622,440h33.613l50.082-155.811,7.871,2.568L288,356.079V440h32V354.04a24.068,24.068,0,0,0-2.931-11.493l-37.56-68.861,28.949-88.715,19.27,34.684A24.011,24.011,0,0,0,348.707,232H400V200H353.414Z' class='ci-primary'/>",
        ],
        o = [
          "512 512",
          "<rect width='288' height='32' x='184' y='80' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='288' height='32' x='184' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='288' height='32' x='184' y='400' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='120 160 120 40 56 40 56 72 88 72 88 160 120 160' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='56 262.111 56 312 136 312 136 280 91.777 280 136 257.889 136 192 56 192 56 224 104 224 104 238.111 56 262.111' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='56 440 56 472 136 472 136 344 56 344 56 376 104 376 104 392 80 392 80 424 104 424 104 440 56 440' class='ci-primary'/>",
        ],
        s = [
          "512 512",
          "<path fill='var(--ci-primary-color, currentColor)' d='M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z' class='ci-primary'/>",
        ],
        m = a(3379),
        u = a.n(m),
        p = a(7795),
        f = a.n(p),
        d = a(569),
        y = a.n(d),
        h = a(3565),
        E = a.n(h),
        v = a(9216),
        g = a.n(v),
        b = a(4589),
        w = a.n(b),
        x = a(746),
        C = {};
      (C.styleTagTransform = w()),
        (C.setAttributes = E()),
        (C.insert = y().bind(null, "head")),
        (C.domAPI = f()),
        (C.insertStyleElement = g()),
        u()(x.Z, C),
        x.Z && x.Z.locals && x.Z.locals;
      var L = [
        { name: "Mindegyik", value: "all" },
        { name: "Tesco", value: "tesco" },
        { name: "SPAR", value: "spar" },
        { name: "Lidl", value: "lidl" },
      ];
      const A = function () {
        return r.createElement(
          t.pf,
          {
            expand: "lg",
            colorScheme: "light",
            className: "bg-warning border-top",
          },
          r.createElement(
            t.KB,
            { fluid: !0 },
            r.createElement(
              t.t2,
              { className: "flex-fill justify-content-between" },
              r.createElement(
                t.U6,
                null,
                r.createElement(
                  t.LX,
                  {
                    "aria-label": "Bolttípus választó",
                    floatingLabel: "Bolttípus",
                    id: "store-or-restaurant",
                  },
                  r.createElement("option", { value: "all" }, "Összes"),
                  r.createElement(
                    "option",
                    { value: "food-store-only" },
                    "Csak élelmiszeráruház"
                  ),
                  r.createElement(
                    "option",
                    { value: "fast-food-only" },
                    "Csak gyorsétterem"
                  )
                )
              ),
              r.createElement(
                t.U6,
                null,
                r.createElement(
                  t.LX,
                  {
                    "aria-label": "Boltválasztó",
                    floatingLabel: "Válassz egy boltot",
                    id: "shop-selector",
                    style: { minWidth: "15rem" },
                  },
                  L.map(function (e, l) {
                    return r.createElement(
                      "option",
                      { key: "shop-".concat(l), value: e.value },
                      e.name
                    );
                  })
                )
              ),
              r.createElement(
                t.U6,
                null,
                r.createElement(t.jO, {
                  type: "text",
                  id: "city-selector",
                  floatingLabel: "Település",
                  placeholder: "Település",
                })
              ),
              r.createElement(
                t.U6,
                null,
                r.createElement(
                  t.u5,
                  null,
                  r.createElement(c.Z, { icon: i, className: "me-2" }),
                  "Mutasd a legközelebbit!"
                )
              ),
              r.createElement(
                t.U6,
                null,
                r.createElement(
                  t.u5,
                  null,
                  r.createElement(c.Z, { icon: o, className: "me-2" }),
                  "Top5 akció"
                )
              ),
              r.createElement(
                t.U6,
                null,
                r.createElement(
                  t.u5,
                  null,
                  r.createElement(c.Z, { icon: s, className: "me-2" }),
                  "Kedvenceim"
                )
              )
            )
          )
        );
      };
      var S = function (e) {
        return e.toLocaleString("hu-HU", { dateStyle: "short" });
      };
      const k = function (e) {
          var l = e.offerData,
            a = l.offerName,
            n = l.description,
            c = l.image,
            i = l.offerHref,
            o = l.validFrom,
            s = l.validTo;
          return r.createElement(
            t.dL,
            { className: "m-3", style: { width: "30rem" } },
            r.createElement(
              t.xH,
              { className: "p-4" },
              r.createElement(t.pX, { src: c })
            ),
            r.createElement(
              t.xH,
              {
                className: "text-white bg-success py-5",
                style: { width: "44%" },
              },
              r.createElement(
                t.sl,
                null,
                r.createElement(t.tj, null, a),
                r.createElement(
                  t.uS,
                  null,
                  "".concat(S(o), " - ").concat(S(s))
                ),
                r.createElement(t.uS, null, n),
                r.createElement(
                  t.u5,
                  { color: "warning", className: "px-4", href: i },
                  "Érdekel!"
                )
              )
            )
          );
        },
        N = function () {
          var e = (0, r.useState)([]),
            l = e[0],
            a = e[1];
          return (
            (0, r.useEffect)(function () {
              for (
                var e = [],
                  l = {
                    offerName: "50% leértékelés a SPAR-nál!",
                    description:
                      "Odio aenean sed adipiscing diam donec. Id semper risus in hendrerit gravida rutrum quisque non tellus. In nulla posuere sollicitudin aliquam. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin.",
                    image:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/WTSB_Obersch%C3%BCtzen_Spar_Tatzmannsdorferstra%C3%9Fe_51.jpg/1280px-WTSB_Obersch%C3%BCtzen_Spar_Tatzmannsdorferstra%C3%9Fe_51.jpg",
                    offerHref: "https://www.spar.hu/",
                    storeName: "SPAR",
                    validFrom: new Date(),
                    validTo: new Date(),
                  },
                  r = 0;
                r < 25;
                r++
              )
                e.push(l);
              a(e);
            }, []),
            r.createElement(
              "div",
              { className: "flex-fill d-flex flex-column" },
              r.createElement(
                "main",
                { className: "flex-fill d-flex flex-column" },
                r.createElement(A, null),
                r.createElement(
                  t.KB,
                  {
                    lg: !0,
                    className:
                      "flex-fill d-flex justify-content-center flex-wrap",
                  },
                  l.map(function (e, l) {
                    return r.createElement(k, {
                      key: "offer-".concat(l),
                      offerData: e,
                    });
                  })
                ),
                r.createElement(n.Js, null)
              ),
              r.createElement(n.$_, null)
            )
          );
        };
    },
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUVzQixNQUFPLFFBQ2xGLGdCQUFvQixLQUFXLEtBQzNCLGdCQUFvQixLQUFZLEtBQU1OLEdBQ3RDLGdCQUFvQixLQUFXLEtBQU0sR0FBR1YsT0FBT0ksRUFBc0JVLEdBQVksT0FBT2QsT0FBT0ksRUFBc0JXLEtBQ3JILGdCQUFvQixLQUFXLEtBQU1KLEdBQ3JDLGdCQUFvQixLQUFTLENBQUVPLE1BQU8sVUFBVzNCLFVBQVcsT0FBUTRCLEtBQU1OLEdBQWEsY0FDdkcsRUNjQSxFQTFCaUIsV0FFYixJQUFJTCxHQUFLLElBQUFZLFVBQVMsSUFBS0MsRUFBZ0JiLEVBQUcsR0FBSWMsRUFBbUJkLEVBQUcsR0FpQnBFLE9BaEJBLElBQUFlLFlBQVUsV0FXTixJQVZBLElBQUlDLEVBQWEsR0FDYkMsRUFBVyxDQUNYZixVQUFXLDhCQUNYQyxZQUFhLG9OQUNiQyxNQUFPLCtMQUNQQyxVQUFXLHVCQUNYYSxVQUFXLE9BQ1haLFVBQVcsSUFBSWEsS0FDZlosUUFBUyxJQUFJWSxNQUVSN0IsRUFBUSxFQUFHQSxFQUFRLEdBQUlBLElBQzVCMEIsRUFBV2xELEtBQUttRCxHQUVwQkgsRUFBaUJFLEVBQ3JCLEdBQUcsSUFDSyxnQkFBb0IsTUFBTyxDQUFFakMsVUFBVyxnQ0FDNUMsZ0JBQW9CLE9BQVEsQ0FBRUEsVUFBVyxnQ0FDckMsZ0JBQW9CLEVBQVcsTUFDL0IsZ0JBQW9CLEtBQVksQ0FBRXFDLElBQUksRUFBTXJDLFVBQVcscURBQXVEOEIsRUFBY3pCLEtBQUksU0FBVWlDLEVBQU8vQixHQUFTLE9BQU8sZ0JBQW9CLEVBQVcsQ0FBRUMsSUFBSyxTQUFTQyxPQUFPRixHQUFRVyxVQUFXb0IsR0FBVSxLQUNwUCxnQkFBb0IsS0FBbUIsT0FDM0MsZ0JBQW9CLEtBQVEsTUFDcEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rpc2NvdW50X3RvZGF5Ly4vc3JjL3ZpZXdzL1NlYXJjaFBhZ2UvU2VhcmNoQmFyL1NlYXJjaEJhci5zY3NzIiwid2VicGFjazovL2Rpc2NvdW50X3RvZGF5Ly4vbm9kZV9tb2R1bGVzL0Bjb3JldWkvaWNvbnMvZGlzdC9lc20vZnJlZS9jaWwtd2Fsay5qcyIsIndlYnBhY2s6Ly9kaXNjb3VudF90b2RheS8uL25vZGVfbW9kdWxlcy9AY29yZXVpL2ljb25zL2Rpc3QvZXNtL2ZyZWUvY2lsLWxpc3QtbnVtYmVyZWQuanMiLCJ3ZWJwYWNrOi8vZGlzY291bnRfdG9kYXkvLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9pY29ucy9kaXN0L2VzbS9mcmVlL2NpbC1zdGFyLmpzIiwid2VicGFjazovL2Rpc2NvdW50X3RvZGF5Ly4vc3JjL3ZpZXdzL1NlYXJjaFBhZ2UvU2VhcmNoQmFyL1NlYXJjaEJhci5zY3NzPzhkMzYiLCJ3ZWJwYWNrOi8vZGlzY291bnRfdG9kYXkvLi9zcmMvdmlld3MvU2VhcmNoUGFnZS9TZWFyY2hCYXIvU2VhcmNoQmFyLnRzeCIsIndlYnBhY2s6Ly9kaXNjb3VudF90b2RheS8uL3NyYy92aWV3cy9TZWFyY2hQYWdlL09mZmVyQ2FyZC9PZmZlckNhcmQudHN4Iiwid2VicGFjazovL2Rpc2NvdW50X3RvZGF5Ly4vc3JjL3ZpZXdzL1NlYXJjaFBhZ2UvU2VhcmNoUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2LWl0ZW17bWFyZ2luLWJvdHRvbTowfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9TZWFyY2hQYWdlL1NlYXJjaEJhci9TZWFyY2hCYXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxVQUNJLGVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdi1pdGVtIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBjaWxXYWxrID0gW1wiNTEyIDUxMlwiLCBcIjxjaXJjbGUgY3g9JzMwOS45MTInIGN5PSc4Mi4wODgnIHI9JzM0LjA4OCcgZmlsbD0ndmFyKC0tY2ktcHJpbWFyeS1jb2xvciwgY3VycmVudENvbG9yKScgY2xhc3M9J2NpLXByaW1hcnknLz48cGF0aCBmaWxsPSd2YXIoLS1jaS1wcmltYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpJyBkPSdNMzIyLDE0My40NjJsLTYwLjU4NS0yMC42NEwxODMuOCwxNTEuMDQ4QTI0LjA3MywyNC4wNzMsMCwwLDAsMTY4LDE3My42VjIzMmgzMlYxNzkuMjA3bDQ4LjgxMS0xNy43NDlMMTU4LjYyMiw0NDBoMzMuNjEzbDUwLjA4Mi0xNTUuODExLDcuODcxLDIuNTY4TDI4OCwzNTYuMDc5VjQ0MGgzMlYzNTQuMDRhMjQuMDY4LDI0LjA2OCwwLDAsMC0yLjkzMS0xMS40OTNsLTM3LjU2LTY4Ljg2MSwyOC45NDktODguNzE1LDE5LjI3LDM0LjY4NEEyNC4wMTEsMjQuMDExLDAsMCwwLDM0OC43MDcsMjMySDQwMFYyMDBIMzUzLjQxNFonIGNsYXNzPSdjaS1wcmltYXJ5Jy8+XCJdO1xuXG5leHBvcnQgeyBjaWxXYWxrIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaWwtd2Fsay5qcy5tYXBcbiIsInZhciBjaWxMaXN0TnVtYmVyZWQgPSBbXCI1MTIgNTEyXCIsIFwiPHJlY3Qgd2lkdGg9JzI4OCcgaGVpZ2h0PSczMicgeD0nMTg0JyB5PSc4MCcgZmlsbD0ndmFyKC0tY2ktcHJpbWFyeS1jb2xvciwgY3VycmVudENvbG9yKScgY2xhc3M9J2NpLXByaW1hcnknLz48cmVjdCB3aWR0aD0nMjg4JyBoZWlnaHQ9JzMyJyB4PScxODQnIHk9JzI0MCcgZmlsbD0ndmFyKC0tY2ktcHJpbWFyeS1jb2xvciwgY3VycmVudENvbG9yKScgY2xhc3M9J2NpLXByaW1hcnknLz48cmVjdCB3aWR0aD0nMjg4JyBoZWlnaHQ9JzMyJyB4PScxODQnIHk9JzQwMCcgZmlsbD0ndmFyKC0tY2ktcHJpbWFyeS1jb2xvciwgY3VycmVudENvbG9yKScgY2xhc3M9J2NpLXByaW1hcnknLz48cG9seWdvbiBmaWxsPSd2YXIoLS1jaS1wcmltYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpJyBwb2ludHM9JzEyMCAxNjAgMTIwIDQwIDU2IDQwIDU2IDcyIDg4IDcyIDg4IDE2MCAxMjAgMTYwJyBjbGFzcz0nY2ktcHJpbWFyeScvPjxwb2x5Z29uIGZpbGw9J3ZhcigtLWNpLXByaW1hcnktY29sb3IsIGN1cnJlbnRDb2xvciknIHBvaW50cz0nNTYgMjYyLjExMSA1NiAzMTIgMTM2IDMxMiAxMzYgMjgwIDkxLjc3NyAyODAgMTM2IDI1Ny44ODkgMTM2IDE5MiA1NiAxOTIgNTYgMjI0IDEwNCAyMjQgMTA0IDIzOC4xMTEgNTYgMjYyLjExMScgY2xhc3M9J2NpLXByaW1hcnknLz48cG9seWdvbiBmaWxsPSd2YXIoLS1jaS1wcmltYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpJyBwb2ludHM9JzU2IDQ0MCA1NiA0NzIgMTM2IDQ3MiAxMzYgMzQ0IDU2IDM0NCA1NiAzNzYgMTA0IDM3NiAxMDQgMzkyIDgwIDM5MiA4MCA0MjQgMTA0IDQyNCAxMDQgNDQwIDU2IDQ0MCcgY2xhc3M9J2NpLXByaW1hcnknLz5cIl07XG5cbmV4cG9ydCB7IGNpbExpc3ROdW1iZXJlZCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2lsLWxpc3QtbnVtYmVyZWQuanMubWFwXG4iLCJ2YXIgY2lsU3RhciA9IFtcIjUxMiA1MTJcIiwgXCI8cGF0aCBmaWxsPSd2YXIoLS1jaS1wcmltYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpJyBkPSdNNDk0LDE5OC42NzFhNDAuNTM2LDQwLjUzNiwwLDAsMC0zMi4xNzQtMjcuNTkyTDM0NS45MTcsMTUyLjI0MiwyOTIuMTg1LDQ3LjgyOGE0MC43LDQwLjcsMCwwLDAtNzIuMzcsMEwxNjYuMDgzLDE1Mi4yNDIsNTAuMTc2LDE3MS4wNzlhNDAuNyw0MC43LDAsMCwwLTIyLjM2NCw2OC44MjdsODIuNyw4My4zNjgtMTcuOSwxMTYuMDU1YTQwLjY3Miw0MC42NzIsMCwwLDAsNTguNTQ4LDQyLjUzOEwyNTYsNDI4Ljk3N2wxMDQuODQzLDUyLjg5YTQwLjY5LDQwLjY5LDAsMCwwLDU4LjU0OC00Mi41MzhsLTE3LjktMTE2LjA1NSw4Mi43LTgzLjM2OEE0MC41MzgsNDAuNTM4LDAsMCwwLDQ5NCwxOTguNjcxWm0tMzIuNTMsMTguN0wzNjcuNCwzMTIuMmwyMC4zNjQsMTMyLjAxYTguNjcxLDguNjcxLDAsMCwxLTEyLjUwOSw5LjA4OEwyNTYsMzkzLjEzNiwxMzYuNzQ0LDQ1My4zYTguNjcxLDguNjcxLDAsMCwxLTEyLjUwOS05LjA4OEwxNDQuNiwzMTIuMiw1MC41MzEsMjE3LjM3YTguNyw4LjcsMCwwLDEsNC43NzgtMTQuNzA2TDE4Ny4xNSwxODEuMjM4LDI0OC4yNjksNjIuNDcxYTguNjk0LDguNjk0LDAsMCwxLDE1LjQ2MiwwTDMyNC44NSwxODEuMjM4bDEzMS44NDEsMjEuNDI2QTguNyw4LjcsMCwwLDEsNDYxLjQ2OSwyMTcuMzdaJyBjbGFzcz0nY2ktcHJpbWFyeScvPlwiXTtcblxuZXhwb3J0IHsgY2lsU3RhciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2lsLXN0YXIuanMubWFwXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1NlYXJjaEJhci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU2VhcmNoQmFyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ0ljb24gZnJvbSBcIkBjb3JldWkvaWNvbnMtcmVhY3RcIjtcbmltcG9ydCB7IENCdXR0b24sIENDb250YWluZXIsIENGb3JtSW5wdXQsIENGb3JtU2VsZWN0LCBDTmF2SXRlbSwgQ05hdmJhciwgQ05hdmJhck5hdiwgfSBmcm9tIFwiQGNvcmV1aS9yZWFjdFwiO1xuaW1wb3J0IHsgY2lsTGlzdE51bWJlcmVkLCBjaWxTdGFyLCBjaWxXYWxrIH0gZnJvbSBcIkBjb3JldWkvaWNvbnNcIjtcbmltcG9ydCBcIi4vU2VhcmNoQmFyLnNjc3NcIjtcbnZhciBzaG9wcyA9IFtcbiAgICB7IG5hbWU6IFwiTWluZGVneWlrXCIsIHZhbHVlOiBcImFsbFwiIH0sXG4gICAgeyBuYW1lOiBcIlRlc2NvXCIsIHZhbHVlOiBcInRlc2NvXCIgfSxcbiAgICB7IG5hbWU6IFwiU1BBUlwiLCB2YWx1ZTogXCJzcGFyXCIgfSxcbiAgICB7IG5hbWU6IFwiTGlkbFwiLCB2YWx1ZTogXCJsaWRsXCIgfSxcbl07XG52YXIgU2VhcmNoQmFyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChDTmF2YmFyLCB7IGV4cGFuZDogXCJsZ1wiLCBjb2xvclNjaGVtZTogXCJsaWdodFwiLCBjbGFzc05hbWU6IFwiYmctd2FybmluZyBib3JkZXItdG9wXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDQ29udGFpbmVyLCB7IGZsdWlkOiB0cnVlIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENOYXZiYXJOYXYsIHsgY2xhc3NOYW1lOiBcImZsZXgtZmlsbCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDTmF2SXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDRm9ybVNlbGVjdCwgeyBcImFyaWEtbGFiZWxcIjogXCJCb2x0dFxcdTAwRURwdXMgdlxcdTAwRTFsYXN6dFxcdTAwRjNcIiwgZmxvYXRpbmdMYWJlbDogXCJCb2x0dFxcdTAwRURwdXNcIiwgaWQ6IFwic3RvcmUtb3ItcmVzdGF1cmFudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiYWxsXCIgfSwgXCJcXHUwMEQ2c3N6ZXNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiZm9vZC1zdG9yZS1vbmx5XCIgfSwgXCJDc2FrIFxcdTAwRTlsZWxtaXN6ZXJcXHUwMEUxcnVoXFx1MDBFMXpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiZmFzdC1mb29kLW9ubHlcIiB9LCBcIkNzYWsgZ3lvcnNcXHUwMEU5dHRlcmVtXCIpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDTmF2SXRlbSwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDRm9ybVNlbGVjdCwgeyBcImFyaWEtbGFiZWxcIjogXCJCb2x0dlxcdTAwRTFsYXN6dFxcdTAwRjNcIiwgZmxvYXRpbmdMYWJlbDogXCJWXFx1MDBFMWxhc3N6IGVneSBib2x0b3RcIiwgaWQ6IFwic2hvcC1zZWxlY3RvclwiLCBzdHlsZTogeyBtaW5XaWR0aDogXCIxNXJlbVwiIH0gfSwgc2hvcHMubWFwKGZ1bmN0aW9uIChzaG9wLCBpbmRleCkgeyByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IFwic2hvcC1cIi5jb25jYXQoaW5kZXgpLCB2YWx1ZTogc2hvcC52YWx1ZSB9LCBzaG9wLm5hbWUpKTsgfSkpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENOYXZJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENGb3JtSW5wdXQsIHsgdHlwZTogXCJ0ZXh0XCIsIGlkOiBcImNpdHktc2VsZWN0b3JcIiwgZmxvYXRpbmdMYWJlbDogXCJUZWxlcFxcdTAwRkNsXFx1MDBFOXNcIiwgcGxhY2Vob2xkZXI6IFwiVGVsZXBcXHUwMEZDbFxcdTAwRTlzXCIgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ05hdkl0ZW0sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ0J1dHRvbiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ0ljb24sIHsgaWNvbjogY2lsV2FsaywgY2xhc3NOYW1lOiBcIm1lLTJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTXV0YXNkIGEgbGVna1xcdTAwRjZ6ZWxlYmJpdCFcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ05hdkl0ZW0sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ0J1dHRvbiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ0ljb24sIHsgaWNvbjogY2lsTGlzdE51bWJlcmVkLCBjbGFzc05hbWU6IFwibWUtMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUb3A1IGFrY2lcXHUwMEYzXCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENOYXZJdGVtLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENCdXR0b24sIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENJY29uLCB7IGljb246IGNpbFN0YXIsIGNsYXNzTmFtZTogXCJtZS0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIktlZHZlbmNlaW1cIikpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ0J1dHRvbiwgQ0NhcmQsIENDYXJkQm9keSwgQ0NhcmRHcm91cCwgQ0NhcmRJbWFnZSwgQ0NhcmRUZXh0LCBDQ2FyZFRpdGxlLCB9IGZyb20gJ0Bjb3JldWkvcmVhY3QnO1xudmFyIGZvcm1hdFRvSHVuZ2FyaWFuRGF0ZSA9IGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnRvTG9jYWxlU3RyaW5nKFwiaHUtSFVcIiwgeyBkYXRlU3R5bGU6IFwic2hvcnRcIiB9KTsgfTtcbnZhciBPZmZlckNhcmQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgb2ZmZXJEYXRhID0gX2Eub2ZmZXJEYXRhO1xuICAgIHZhciBvZmZlck5hbWUgPSBvZmZlckRhdGEub2ZmZXJOYW1lLCBkZXNjcmlwdGlvbiA9IG9mZmVyRGF0YS5kZXNjcmlwdGlvbiwgaW1hZ2UgPSBvZmZlckRhdGEuaW1hZ2UsIG9mZmVySHJlZiA9IG9mZmVyRGF0YS5vZmZlckhyZWYsIFxuICAgIC8vc3RvcmVOYW1lLFxuICAgIHZhbGlkRnJvbSA9IG9mZmVyRGF0YS52YWxpZEZyb20sIHZhbGlkVG8gPSBvZmZlckRhdGEudmFsaWRUbztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ0NhcmRHcm91cCwgeyBjbGFzc05hbWU6ICdtLTMnLCBzdHlsZTogeyB3aWR0aDogXCIzMHJlbVwiIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDQ2FyZCwgeyBjbGFzc05hbWU6IFwicC00XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ0NhcmRJbWFnZSwgeyBzcmM6IGltYWdlIH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDQ2FyZCwgeyBjbGFzc05hbWU6IFwidGV4dC13aGl0ZSBiZy1zdWNjZXNzIHB5LTVcIiwgc3R5bGU6IHsgd2lkdGg6ICc0NCUnIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ0NhcmRCb2R5LCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ0NhcmRUaXRsZSwgbnVsbCwgb2ZmZXJOYW1lKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENDYXJkVGV4dCwgbnVsbCwgXCJcIi5jb25jYXQoZm9ybWF0VG9IdW5nYXJpYW5EYXRlKHZhbGlkRnJvbSksIFwiIC0gXCIpLmNvbmNhdChmb3JtYXRUb0h1bmdhcmlhbkRhdGUodmFsaWRUbykpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENDYXJkVGV4dCwgbnVsbCwgZGVzY3JpcHRpb24pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ0J1dHRvbiwgeyBjb2xvcjogXCJ3YXJuaW5nXCIsIGNsYXNzTmFtZTogXCJweC00XCIsIGhyZWY6IG9mZmVySHJlZiB9LCBcIlxcdTAwQzlyZGVrZWwhXCIpKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBPZmZlckNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ0NvbnRhaW5lciB9IGZyb20gXCJAY29yZXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGb290ZXIsIFNob3BMb2dvQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vU2VhcmNoQmFyL1NlYXJjaEJhclwiO1xuaW1wb3J0IE9mZmVyQ2FyZCBmcm9tIFwiLi9PZmZlckNhcmQvT2ZmZXJDYXJkXCI7XG52YXIgU2VhcmNoUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL2NvbnN0IG9mZmVyczogT2ZmZXJEYXRhW10gPSBbXTtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShbXSksIGZha2VPZmZlckxpc3QgPSBfYVswXSwgc2V0RmFrZU9mZmVyTGlzdCA9IF9hWzFdO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmYWtlT2ZmZXJzID0gW107XG4gICAgICAgIHZhciBmYWtlRGF0YSA9IHtcbiAgICAgICAgICAgIG9mZmVyTmFtZTogXCI1MCUgbGXDqXJ0w6lrZWzDqXMgYSBTUEFSLW7DoWwhXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPZGlvIGFlbmVhbiBzZWQgYWRpcGlzY2luZyBkaWFtIGRvbmVjLiBJZCBzZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0IGdyYXZpZGEgcnV0cnVtIHF1aXNxdWUgbm9uIHRlbGx1cy4gSW4gbnVsbGEgcG9zdWVyZSBzb2xsaWNpdHVkaW4gYWxpcXVhbS4gVXJuYSBuZWMgdGluY2lkdW50IHByYWVzZW50IHNlbXBlciBmZXVnaWF0IG5pYmggc2VkIHB1bHZpbmFyIHByb2luLlwiLFxuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi85Lzk2L1dUU0JfT2JlcnNjaCVDMyVCQ3R6ZW5fU3Bhcl9UYXR6bWFubnNkb3JmZXJzdHJhJUMzJTlGZV81MS5qcGcvMTI4MHB4LVdUU0JfT2JlcnNjaCVDMyVCQ3R6ZW5fU3Bhcl9UYXR6bWFubnNkb3JmZXJzdHJhJUMzJTlGZV81MS5qcGdcIixcbiAgICAgICAgICAgIG9mZmVySHJlZjogXCJodHRwczovL3d3dy5zcGFyLmh1L1wiLFxuICAgICAgICAgICAgc3RvcmVOYW1lOiBcIlNQQVJcIixcbiAgICAgICAgICAgIHZhbGlkRnJvbTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIHZhbGlkVG86IG5ldyBEYXRlKCksXG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCAyNTsgaW5kZXgrKykge1xuICAgICAgICAgICAgZmFrZU9mZmVycy5wdXNoKGZha2VEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRGYWtlT2ZmZXJMaXN0KGZha2VPZmZlcnMpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleC1maWxsIGQtZmxleCBmbGV4LWNvbHVtblwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIHsgY2xhc3NOYW1lOiBcImZsZXgtZmlsbCBkLWZsZXggZmxleC1jb2x1bW5cIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWFyY2hCYXIsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDQ29udGFpbmVyLCB7IGxnOiB0cnVlLCBjbGFzc05hbWU6IFwiZmxleC1maWxsIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtd3JhcFwiIH0sIGZha2VPZmZlckxpc3QubWFwKGZ1bmN0aW9uIChvZmZlciwgaW5kZXgpIHsgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoT2ZmZXJDYXJkLCB7IGtleTogXCJvZmZlci1cIi5jb25jYXQoaW5kZXgpLCBvZmZlckRhdGE6IG9mZmVyIH0pOyB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNob3BMb2dvQ29udGFpbmVyLCBudWxsKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBhZ2U7XG4iXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJjaWxXYWxrIiwiY2lsTGlzdE51bWJlcmVkIiwiY2lsU3RhciIsIm9wdGlvbnMiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsInNldEF0dHJpYnV0ZXMiLCJpbnNlcnQiLCJkb21BUEkiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzaG9wcyIsIm5hbWUiLCJ2YWx1ZSIsImV4cGFuZCIsImNvbG9yU2NoZW1lIiwiY2xhc3NOYW1lIiwiZmx1aWQiLCJmbG9hdGluZ0xhYmVsIiwic3R5bGUiLCJtaW5XaWR0aCIsIm1hcCIsInNob3AiLCJpbmRleCIsImtleSIsImNvbmNhdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImljb24iLCJmb3JtYXRUb0h1bmdhcmlhbkRhdGUiLCJkIiwidG9Mb2NhbGVTdHJpbmciLCJkYXRlU3R5bGUiLCJfYSIsIm9mZmVyRGF0YSIsIm9mZmVyTmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJvZmZlckhyZWYiLCJ2YWxpZEZyb20iLCJ2YWxpZFRvIiwid2lkdGgiLCJzcmMiLCJjb2xvciIsImhyZWYiLCJ1c2VTdGF0ZSIsImZha2VPZmZlckxpc3QiLCJzZXRGYWtlT2ZmZXJMaXN0IiwidXNlRWZmZWN0IiwiZmFrZU9mZmVycyIsImZha2VEYXRhIiwic3RvcmVOYW1lIiwiRGF0ZSIsImxnIiwib2ZmZXIiXSwic291cmNlUm9vdCI6IiJ9
