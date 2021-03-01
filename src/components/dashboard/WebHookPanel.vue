<template>
  <div class="card">
    <div class="card-header">
      <h3 class="card-title">Webhooks</h3>
    </div>
    <div class="card-table table-responsive">
      <table class="table table-vcenter">
        <thead>
          <tr>
            <th>Url</th>
            <th>Hit Count</th>
            <th>Data Transfered</th>
            <th colspan="2">Memory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              https://api.makesense.io/v1/humidity
              <a href="#" class="ms-1" aria-label="Open website"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                  ></path>
                  <path
                    d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                  ></path>
                </svg>
              </a>
            </td>
            <td class="text-muted">4,896</td>
            <td class="text-muted">3,654 KB</td>
            <td class="text-muted">82.54%</td>
            <td class="text-end w-1" style="position: relative">
              <div
                class="chart-sparkline chart-sparkline-sm"
                id="sparkline-bounce-rate-1"
                style="min-height: 24px"
              >
                <div
                  id="apexchartsz7qz4tfh"
                  class="apexcharts-canvas apexchartsz7qz4tfh apexcharts-theme-light"
                  style="width: 64px; height: 24px"
                >
                  <svg
                    id="SvgjsSvg2615"
                    width="64"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    class="apexcharts-svg"
                    xmlns:data="ApexChartsNS"
                    transform="translate(0, 0)"
                    style="background: transparent"
                  >
                    <g
                      id="SvgjsG2617"
                      class="apexcharts-inner apexcharts-graphical"
                      transform="translate(0, 0)"
                    >
                      <defs id="SvgjsDefs2616">
                        <clipPath id="gridRectMaskz7qz4tfh">
                          <rect
                            id="SvgjsRect2623"
                            width="70"
                            height="26"
                            x="-3"
                            y="-1"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke="none"
                            stroke-dasharray="0"
                            fill="#fff"
                          ></rect>
                        </clipPath>
                        <clipPath id="gridRectMarkerMaskz7qz4tfh">
                          <rect
                            id="SvgjsRect2624"
                            width="68"
                            height="28"
                            x="-2"
                            y="-2"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke="none"
                            stroke-dasharray="0"
                            fill="#fff"
                          ></rect>
                        </clipPath>
                      </defs>
                      <line
                        id="SvgjsLine2622"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="24"
                        stroke="#b6b6b6"
                        stroke-dasharray="3"
                        class="apexcharts-xcrosshairs"
                        x="0"
                        y="0"
                        width="1"
                        height="24"
                        fill="#b1b9c4"
                        filter="none"
                        fill-opacity="0.9"
                        stroke-width="1"
                      ></line>
                      <g
                        id="SvgjsG2630"
                        class="apexcharts-xaxis"
                        transform="translate(0, 0)"
                      >
                        <g
                          id="SvgjsG2631"
                          class="apexcharts-xaxis-texts-g"
                          transform="translate(0, 2.75)"
                        ></g>
                      </g>
                      <g id="SvgjsG2642" class="apexcharts-grid">
                        <g
                          id="SvgjsG2643"
                          class="apexcharts-gridlines-horizontal"
                          style="display: none"
                        >
                          <line
                            id="SvgjsLine2645"
                            x1="0"
                            y1="0"
                            x2="64"
                            y2="0"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2646"
                            x1="0"
                            y1="6"
                            x2="64"
                            y2="6"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2647"
                            x1="0"
                            y1="12"
                            x2="64"
                            y2="12"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2648"
                            x1="0"
                            y1="18"
                            x2="64"
                            y2="18"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2649"
                            x1="0"
                            y1="24"
                            x2="64"
                            y2="24"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                        </g>
                        <g
                          id="SvgjsG2644"
                          class="apexcharts-gridlines-vertical"
                          style="display: none"
                        ></g>
                        <line
                          id="SvgjsLine2651"
                          x1="0"
                          y1="24"
                          x2="64"
                          y2="24"
                          stroke="transparent"
                          stroke-dasharray="0"
                        ></line>
                        <line
                          id="SvgjsLine2650"
                          x1="0"
                          y1="1"
                          x2="0"
                          y2="24"
                          stroke="transparent"
                          stroke-dasharray="0"
                        ></line>
                      </g>
                      <g
                        id="SvgjsG2625"
                        class="apexcharts-line-series apexcharts-plot-series"
                      >
                        <g
                          id="SvgjsG2626"
                          class="apexcharts-series"
                          seriesName="seriesx1"
                          data:longestSeries="true"
                          rel="1"
                          data:realIndex="0"
                        >
                          <path
                            id="SvgjsPath2629"
                            d="M 0 7L 8 0L 16 4L 24 14L 32 19L 40 23L 48 20L 56 6L 64 11"
                            fill="none"
                            fill-opacity="1"
                            stroke="rgba(32,107,196,0.85)"
                            stroke-opacity="1"
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke-dasharray="0"
                            class="apexcharts-line"
                            index="0"
                            clip-path="url(#gridRectMaskz7qz4tfh)"
                            pathTo="M 0 7L 8 0L 16 4L 24 14L 32 19L 40 23L 48 20L 56 6L 64 11"
                            pathFrom="M -1 24L -1 24L 8 24L 16 24L 24 24L 32 24L 40 24L 48 24L 56 24L 64 24"
                          ></path>
                          <g
                            id="SvgjsG2627"
                            class="apexcharts-series-markers-wrap"
                            data:realIndex="0"
                          ></g>
                        </g>
                        <g
                          id="SvgjsG2628"
                          class="apexcharts-datalabels"
                          data:realIndex="0"
                        ></g>
                      </g>
                      <line
                        id="SvgjsLine2652"
                        x1="0"
                        y1="0"
                        x2="64"
                        y2="0"
                        stroke="#b6b6b6"
                        stroke-dasharray="0"
                        stroke-width="1"
                        class="apexcharts-ycrosshairs"
                      ></line>
                      <line
                        id="SvgjsLine2653"
                        x1="0"
                        y1="0"
                        x2="64"
                        y2="0"
                        stroke-dasharray="0"
                        stroke-width="0"
                        class="apexcharts-ycrosshairs-hidden"
                      ></line>
                      <g
                        id="SvgjsG2654"
                        class="apexcharts-yaxis-annotations"
                      ></g>
                      <g
                        id="SvgjsG2655"
                        class="apexcharts-xaxis-annotations"
                      ></g>
                      <g
                        id="SvgjsG2656"
                        class="apexcharts-point-annotations"
                      ></g>
                    </g>
                    <rect
                      id="SvgjsRect2621"
                      width="0"
                      height="0"
                      x="0"
                      y="0"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fefefe"
                    ></rect>
                    <g
                      id="SvgjsG2641"
                      class="apexcharts-yaxis"
                      rel="0"
                      transform="translate(-18, 0)"
                    ></g>
                    <g id="SvgjsG2618" class="apexcharts-annotations"></g>
                  </svg>
                  <div class="apexcharts-legend" style="max-height: 12px"></div>
                </div>
              </div>
              <div class="resize-triggers">
                <div class="expand-trigger">
                  <div style="width: 89px; height: 41px"></div>
                </div>
                <div class="contract-trigger"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              https://api.makesense.io/v1/temperature 
              <a href="#" class="ms-1" aria-label="Open website"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                  ></path>
                  <path
                    d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                  ></path>
                </svg>
              </a>
            </td>
            <td class="text-muted">3,652</td>
            <td class="text-muted">3,215 KB</td>
            <td class="text-muted">76.29%</td>
            <td class="text-end w-1" style="position: relative">
              <div
                class="chart-sparkline chart-sparkline-sm"
                id="sparkline-bounce-rate-2"
                style="min-height: 24px"
              >
                <div
                  id="apexchartsjtxgrlah"
                  class="apexcharts-canvas apexchartsjtxgrlah apexcharts-theme-light"
                  style="width: 64px; height: 24px"
                >
                  <svg
                    id="SvgjsSvg2657"
                    width="64"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    class="apexcharts-svg"
                    xmlns:data="ApexChartsNS"
                    transform="translate(0, 0)"
                    style="background: transparent"
                  >
                    <g
                      id="SvgjsG2659"
                      class="apexcharts-inner apexcharts-graphical"
                      transform="translate(0, 0)"
                    >
                      <defs id="SvgjsDefs2658">
                        <clipPath id="gridRectMaskjtxgrlah">
                          <rect
                            id="SvgjsRect2665"
                            width="70"
                            height="26"
                            x="-3"
                            y="-1"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke="none"
                            stroke-dasharray="0"
                            fill="#fff"
                          ></rect>
                        </clipPath>
                        <clipPath id="gridRectMarkerMaskjtxgrlah">
                          <rect
                            id="SvgjsRect2666"
                            width="68"
                            height="28"
                            x="-2"
                            y="-2"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke="none"
                            stroke-dasharray="0"
                            fill="#fff"
                          ></rect>
                        </clipPath>
                      </defs>
                      <line
                        id="SvgjsLine2664"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="24"
                        stroke="#b6b6b6"
                        stroke-dasharray="3"
                        class="apexcharts-xcrosshairs"
                        x="0"
                        y="0"
                        width="1"
                        height="24"
                        fill="#b1b9c4"
                        filter="none"
                        fill-opacity="0.9"
                        stroke-width="1"
                      ></line>
                      <g
                        id="SvgjsG2672"
                        class="apexcharts-xaxis"
                        transform="translate(0, 0)"
                      >
                        <g
                          id="SvgjsG2673"
                          class="apexcharts-xaxis-texts-g"
                          transform="translate(0, 2.75)"
                        ></g>
                      </g>
                      <g id="SvgjsG2684" class="apexcharts-grid">
                        <g
                          id="SvgjsG2685"
                          class="apexcharts-gridlines-horizontal"
                          style="display: none"
                        >
                          <line
                            id="SvgjsLine2687"
                            x1="0"
                            y1="0"
                            x2="64"
                            y2="0"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2688"
                            x1="0"
                            y1="4.8"
                            x2="64"
                            y2="4.8"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2689"
                            x1="0"
                            y1="9.6"
                            x2="64"
                            y2="9.6"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2690"
                            x1="0"
                            y1="14.399999999999999"
                            x2="64"
                            y2="14.399999999999999"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2691"
                            x1="0"
                            y1="19.2"
                            x2="64"
                            y2="19.2"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2692"
                            x1="0"
                            y1="24"
                            x2="64"
                            y2="24"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                        </g>
                        <g
                          id="SvgjsG2686"
                          class="apexcharts-gridlines-vertical"
                          style="display: none"
                        ></g>
                        <line
                          id="SvgjsLine2694"
                          x1="0"
                          y1="24"
                          x2="64"
                          y2="24"
                          stroke="transparent"
                          stroke-dasharray="0"
                        ></line>
                        <line
                          id="SvgjsLine2693"
                          x1="0"
                          y1="1"
                          x2="0"
                          y2="24"
                          stroke="transparent"
                          stroke-dasharray="0"
                        ></line>
                      </g>
                      <g
                        id="SvgjsG2667"
                        class="apexcharts-line-series apexcharts-plot-series"
                      >
                        <g
                          id="SvgjsG2668"
                          class="apexcharts-series"
                          seriesName="seriesx1"
                          data:longestSeries="true"
                          rel="1"
                          data:realIndex="0"
                        >
                          <path
                            id="SvgjsPath2671"
                            d="M 0 11.520000000000001L 8 13.440000000000001L 16 5.760000000000002L 24 2.8800000000000026L 32 12.48L 40 17.28L 48 10.56L 56 21.12L 64 3.84"
                            fill="none"
                            fill-opacity="1"
                            stroke="rgba(32,107,196,0.85)"
                            stroke-opacity="1"
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke-dasharray="0"
                            class="apexcharts-line"
                            index="0"
                            clip-path="url(#gridRectMaskjtxgrlah)"
                            pathTo="M 0 11.520000000000001L 8 13.440000000000001L 16 5.760000000000002L 24 2.8800000000000026L 32 12.48L 40 17.28L 48 10.56L 56 21.12L 64 3.84"
                            pathFrom="M -1 24L -1 24L 8 24L 16 24L 24 24L 32 24L 40 24L 48 24L 56 24L 64 24"
                          ></path>
                          <g
                            id="SvgjsG2669"
                            class="apexcharts-series-markers-wrap"
                            data:realIndex="0"
                          ></g>
                        </g>
                        <g
                          id="SvgjsG2670"
                          class="apexcharts-datalabels"
                          data:realIndex="0"
                        ></g>
                      </g>
                      <line
                        id="SvgjsLine2695"
                        x1="0"
                        y1="0"
                        x2="64"
                        y2="0"
                        stroke="#b6b6b6"
                        stroke-dasharray="0"
                        stroke-width="1"
                        class="apexcharts-ycrosshairs"
                      ></line>
                      <line
                        id="SvgjsLine2696"
                        x1="0"
                        y1="0"
                        x2="64"
                        y2="0"
                        stroke-dasharray="0"
                        stroke-width="0"
                        class="apexcharts-ycrosshairs-hidden"
                      ></line>
                      <g
                        id="SvgjsG2697"
                        class="apexcharts-yaxis-annotations"
                      ></g>
                      <g
                        id="SvgjsG2698"
                        class="apexcharts-xaxis-annotations"
                      ></g>
                      <g
                        id="SvgjsG2699"
                        class="apexcharts-point-annotations"
                      ></g>
                    </g>
                    <rect
                      id="SvgjsRect2663"
                      width="0"
                      height="0"
                      x="0"
                      y="0"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fefefe"
                    ></rect>
                    <g
                      id="SvgjsG2683"
                      class="apexcharts-yaxis"
                      rel="0"
                      transform="translate(-18, 0)"
                    ></g>
                    <g id="SvgjsG2660" class="apexcharts-annotations"></g>
                  </svg>
                  <div class="apexcharts-legend" style="max-height: 12px"></div>
                </div>
              </div>
              <div class="resize-triggers">
                <div class="expand-trigger">
                  <div style="width: 89px; height: 41px"></div>
                </div>
                <div class="contract-trigger"></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              https://api.makesense.io/v1/weather 
              <a href="#" class="ms-1" aria-label="Open website"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"
                  ></path>
                  <path
                    d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"
                  ></path>
                </svg>
              </a>
            </td>
            <td class="text-muted">3,256</td>
            <td class="text-muted">2,865 KB</td>
            <td class="text-muted">72.65%</td>
            <td class="text-end w-1" style="position: relative">
              <div
                class="chart-sparkline chart-sparkline-sm"
                id="sparkline-bounce-rate-3"
                style="min-height: 24px"
              >
                <div
                  id="apexchartsvilgs1k4"
                  class="apexcharts-canvas apexchartsvilgs1k4 apexcharts-theme-light"
                  style="width: 64px; height: 24px"
                >
                  <svg
                    id="SvgjsSvg2700"
                    width="64"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:svgjs="http://svgjs.com/svgjs"
                    class="apexcharts-svg"
                    xmlns:data="ApexChartsNS"
                    transform="translate(0, 0)"
                    style="background: transparent"
                  >
                    <g
                      id="SvgjsG2702"
                      class="apexcharts-inner apexcharts-graphical"
                      transform="translate(0, 0)"
                    >
                      <defs id="SvgjsDefs2701">
                        <clipPath id="gridRectMaskvilgs1k4">
                          <rect
                            id="SvgjsRect2708"
                            width="70"
                            height="26"
                            x="-3"
                            y="-1"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke="none"
                            stroke-dasharray="0"
                            fill="#fff"
                          ></rect>
                        </clipPath>
                        <clipPath id="gridRectMarkerMaskvilgs1k4">
                          <rect
                            id="SvgjsRect2709"
                            width="68"
                            height="28"
                            x="-2"
                            y="-2"
                            rx="0"
                            ry="0"
                            opacity="1"
                            stroke-width="0"
                            stroke="none"
                            stroke-dasharray="0"
                            fill="#fff"
                          ></rect>
                        </clipPath>
                      </defs>
                      <line
                        id="SvgjsLine2707"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="24"
                        stroke="#b6b6b6"
                        stroke-dasharray="3"
                        class="apexcharts-xcrosshairs"
                        x="0"
                        y="0"
                        width="1"
                        height="24"
                        fill="#b1b9c4"
                        filter="none"
                        fill-opacity="0.9"
                        stroke-width="1"
                      ></line>
                      <g
                        id="SvgjsG2715"
                        class="apexcharts-xaxis"
                        transform="translate(0, 0)"
                      >
                        <g
                          id="SvgjsG2716"
                          class="apexcharts-xaxis-texts-g"
                          transform="translate(0, 2.75)"
                        ></g>
                      </g>
                      <g id="SvgjsG2727" class="apexcharts-grid">
                        <g
                          id="SvgjsG2728"
                          class="apexcharts-gridlines-horizontal"
                          style="display: none"
                        >
                          <line
                            id="SvgjsLine2730"
                            x1="0"
                            y1="0"
                            x2="64"
                            y2="0"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2731"
                            x1="0"
                            y1="4.8"
                            x2="64"
                            y2="4.8"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2732"
                            x1="0"
                            y1="9.6"
                            x2="64"
                            y2="9.6"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2733"
                            x1="0"
                            y1="14.399999999999999"
                            x2="64"
                            y2="14.399999999999999"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2734"
                            x1="0"
                            y1="19.2"
                            x2="64"
                            y2="19.2"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                          <line
                            id="SvgjsLine2735"
                            x1="0"
                            y1="24"
                            x2="64"
                            y2="24"
                            stroke="#e0e0e0"
                            stroke-dasharray="0"
                            class="apexcharts-gridline"
                          ></line>
                        </g>
                        <g
                          id="SvgjsG2729"
                          class="apexcharts-gridlines-vertical"
                          style="display: none"
                        ></g>
                        <line
                          id="SvgjsLine2737"
                          x1="0"
                          y1="24"
                          x2="64"
                          y2="24"
                          stroke="transparent"
                          stroke-dasharray="0"
                        ></line>
                        <line
                          id="SvgjsLine2736"
                          x1="0"
                          y1="1"
                          x2="0"
                          y2="24"
                          stroke="transparent"
                          stroke-dasharray="0"
                        ></line>
                      </g>
                      <g
                        id="SvgjsG2710"
                        class="apexcharts-line-series apexcharts-plot-series"
                      >
                        <g
                          id="SvgjsG2711"
                          class="apexcharts-series"
                          seriesName="seriesx1"
                          data:longestSeries="true"
                          rel="1"
                          data:realIndex="0"
                        >
                          <path
                            id="SvgjsPath2714"
                            d="M 0 14.4L 8 11.520000000000001L 16 14.4L 24 20.16L 32 7.68L 40 21.12L 48 1.9200000000000017L 56 2.8800000000000026L 64 5.760000000000002"
                            fill="none"
                            fill-opacity="1"
                            stroke="rgba(32,107,196,0.85)"
                            stroke-opacity="1"
                            stroke-linecap="round"
                            stroke-width="2"
                            stroke-dasharray="0"
                            class="apexcharts-line"
                            index="0"
                            clip-path="url(#gridRectMaskvilgs1k4)"
                            pathTo="M 0 14.4L 8 11.520000000000001L 16 14.4L 24 20.16L 32 7.68L 40 21.12L 48 1.9200000000000017L 56 2.8800000000000026L 64 5.760000000000002"
                            pathFrom="M -1 24L -1 24L 8 24L 16 24L 24 24L 32 24L 40 24L 48 24L 56 24L 64 24"
                          ></path>
                          <g
                            id="SvgjsG2712"
                            class="apexcharts-series-markers-wrap"
                            data:realIndex="0"
                          ></g>
                        </g>
                        <g
                          id="SvgjsG2713"
                          class="apexcharts-datalabels"
                          data:realIndex="0"
                        ></g>
                      </g>
                      <line
                        id="SvgjsLine2738"
                        x1="0"
                        y1="0"
                        x2="64"
                        y2="0"
                        stroke="#b6b6b6"
                        stroke-dasharray="0"
                        stroke-width="1"
                        class="apexcharts-ycrosshairs"
                      ></line>
                      <line
                        id="SvgjsLine2739"
                        x1="0"
                        y1="0"
                        x2="64"
                        y2="0"
                        stroke-dasharray="0"
                        stroke-width="0"
                        class="apexcharts-ycrosshairs-hidden"
                      ></line>
                      <g
                        id="SvgjsG2740"
                        class="apexcharts-yaxis-annotations"
                      ></g>
                      <g
                        id="SvgjsG2741"
                        class="apexcharts-xaxis-annotations"
                      ></g>
                      <g
                        id="SvgjsG2742"
                        class="apexcharts-point-annotations"
                      ></g>
                    </g>
                    <rect
                      id="SvgjsRect2706"
                      width="0"
                      height="0"
                      x="0"
                      y="0"
                      rx="0"
                      ry="0"
                      opacity="1"
                      stroke-width="0"
                      stroke="none"
                      stroke-dasharray="0"
                      fill="#fefefe"
                    ></rect>
                    <g
                      id="SvgjsG2726"
                      class="apexcharts-yaxis"
                      rel="0"
                      transform="translate(-18, 0)"
                    ></g>
                    <g id="SvgjsG2703" class="apexcharts-annotations"></g>
                  </svg>
                  <div class="apexcharts-legend" style="max-height: 12px"></div>
                </div>
              </div>
              <div class="resize-triggers">
                <div class="expand-trigger">
                  <div style="width: 89px; height: 41px"></div>
                </div>
                <div class="contract-trigger"></div>
              </div>
            </td>
          </tr>
        
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>