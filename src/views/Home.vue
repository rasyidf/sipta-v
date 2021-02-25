<template>
  <div class="container-xl">
    <PageHeader title="Dashboard" subtitle="home"/>
    <div class="row row-deck row-cards">
        <div class="col-md-8">
          <div class="card" style="height: calc(24rem + 10px)">
            <div class="card-body card-body-scrollable card-body-scrollable-shadow">
              <div class="divide-y-4">
                <div v-for="i in 10" :key="i" class="history-list">
                  <div class="row">
                    <div class="col-auto">
                      <span class="avatar">JL</span>
                    </div>
                    <div class="col">
                      <div class="text-truncate">
                        <strong>Jeffie Lewzey</strong> commented on your <strong>"I'm not a witch."</strong> post.
                      </div>
                      <div class="text-muted">yesterday</div>
                    </div>
                    <div class="col-auto align-self-center">
                      <div class="badge bg-primary"></div>
                    </div>
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row row-cards">
            <div class="col-12">
              <div class="card card-sm">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <span class="bg-blue text-white avatar">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path><path d="M12 3v3m0 12v3"></path>
                        </svg>
                      </span>
                    </div>
                    <div class="col">
                      <div class="font-weight-medium">
                        132 Sales
                      </div>
                      <div class="text-muted">
                        12 waiting payments
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card card-sm">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <span class="bg-green text-white avatar"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="19" r="2"></circle><circle cx="17" cy="19" r="2"></circle><path d="M17 17h-11v-14h-2"></path><path d="M6 5l14 1l-1 7h-13"></path></svg>
                      </span>
                    </div>
                    <div class="col">
                      <div class="font-weight-medium">
                        78 Orders
                      </div>
                      <div class="text-muted">
                        32 shipped
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card card-sm">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <span class="bg-yellow text-white avatar"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="9" cy="7" r="4"></circle><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path><path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path></svg>
                      </span>
                    </div>
                    <div class="col">
                      <div class="font-weight-medium">
                        1352 Members
                      </div>
                      <div class="text-muted">
                        163 registered today
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card card-sm">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <span class="bg-twitter text-white avatar"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path></svg>
                      </span>
                    </div>
                    <div class="col">
                      <div class="font-weight-medium">
                        623 Shares
                      </div>
                      <div class="text-muted">
                        16 today
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card card-sm">
                <div class="card-body">
                  <div class="row align-items-center">
                    <div class="col-auto">
                      <span class="bg-facebook text-white avatar"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>
                      </span>
                    </div>
                    <div class="col">
                      <div class="font-weight-medium">
                        132 Likes
                      </div>
                      <div class="text-muted">
                        21 today
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-lg-8">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Most Visited Pages</h3>
            </div>
            <div class="card-table table-responsive">
              <table class="table table-vcenter">
                <thead>
                  <tr>
                    <th>Page name</th>
                    <th>Visitors</th>
                    <th>Unique</th>
                    <th colspan="2">Bounce rate</th>
                  </tr>
                </thead>
                <tbody><tr>
                  <td>
                    /about.html
                    <a href="#" class="ms-1" aria-label="Open website"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path></svg>
                    </a>
                  </td>
                  <td class="text-muted">4,896</td>
                  <td class="text-muted">3,654</td>
                  <td class="text-muted">82.54%</td>
                  <td class="text-end w-1" style="position: relative;">
                    <div class="chart-sparkline chart-sparkline-sm" id="sparkline-bounce-rate-1" style="min-height: 24px;"><div id="apexchartsz7qz4tfh" class="apexcharts-canvas apexchartsz7qz4tfh apexcharts-theme-light" style="width: 64px; height: 24px;"><svg id="SvgjsSvg2615" width="64" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2617" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2616"><clipPath id="gridRectMaskz7qz4tfh"><rect id="SvgjsRect2623" width="70" height="26" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskz7qz4tfh"><rect id="SvgjsRect2624" width="68" height="28" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine2622" x1="0" y1="0" x2="0" y2="24" stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="24" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG2630" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2631" class="apexcharts-xaxis-texts-g" transform="translate(0, 2.75)"></g></g><g id="SvgjsG2642" class="apexcharts-grid"><g id="SvgjsG2643" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2645" x1="0" y1="0" x2="64" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2646" x1="0" y1="6" x2="64" y2="6" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2647" x1="0" y1="12" x2="64" y2="12" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2648" x1="0" y1="18" x2="64" y2="18" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2649" x1="0" y1="24" x2="64" y2="24" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG2644" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2651" x1="0" y1="24" x2="64" y2="24" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine2650" x1="0" y1="1" x2="0" y2="24" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG2625" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG2626" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath2629" d="M 0 7L 8 0L 16 4L 24 14L 32 19L 40 23L 48 20L 56 6L 64 11" fill="none" fill-opacity="1" stroke="rgba(32,107,196,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMaskz7qz4tfh)" pathTo="M 0 7L 8 0L 16 4L 24 14L 32 19L 40 23L 48 20L 56 6L 64 11" pathFrom="M -1 24L -1 24L 8 24L 16 24L 24 24L 32 24L 40 24L 48 24L 56 24L 64 24"></path><g id="SvgjsG2627" class="apexcharts-series-markers-wrap" data:realIndex="0"></g></g><g id="SvgjsG2628" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2652" x1="0" y1="0" x2="64" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2653" x1="0" y1="0" x2="64" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2654" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG2655" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG2656" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect2621" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2641" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2618" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 12px;"></div></div></div>
                  <div class="resize-triggers"><div class="expand-trigger"><div style="width: 89px; height: 41px;"></div></div><div class="contract-trigger"></div></div></td>
                </tr>
                <tr>
                  <td>
                    /special-promo.html
                    <a href="#" class="ms-1" aria-label="Open website"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path></svg>
                    </a>
                  </td>
                  <td class="text-muted">3,652</td>
                  <td class="text-muted">3,215</td>
                  <td class="text-muted">76.29%</td>
                  <td class="text-end w-1" style="position: relative;">
                    <div class="chart-sparkline chart-sparkline-sm" id="sparkline-bounce-rate-2" style="min-height: 24px;"><div id="apexchartsjtxgrlah" class="apexcharts-canvas apexchartsjtxgrlah apexcharts-theme-light" style="width: 64px; height: 24px;"><svg id="SvgjsSvg2657" width="64" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2659" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2658"><clipPath id="gridRectMaskjtxgrlah"><rect id="SvgjsRect2665" width="70" height="26" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskjtxgrlah"><rect id="SvgjsRect2666" width="68" height="28" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine2664" x1="0" y1="0" x2="0" y2="24" stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="24" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG2672" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2673" class="apexcharts-xaxis-texts-g" transform="translate(0, 2.75)"></g></g><g id="SvgjsG2684" class="apexcharts-grid"><g id="SvgjsG2685" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2687" x1="0" y1="0" x2="64" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2688" x1="0" y1="4.8" x2="64" y2="4.8" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2689" x1="0" y1="9.6" x2="64" y2="9.6" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2690" x1="0" y1="14.399999999999999" x2="64" y2="14.399999999999999" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2691" x1="0" y1="19.2" x2="64" y2="19.2" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2692" x1="0" y1="24" x2="64" y2="24" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG2686" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2694" x1="0" y1="24" x2="64" y2="24" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine2693" x1="0" y1="1" x2="0" y2="24" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG2667" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG2668" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath2671" d="M 0 11.520000000000001L 8 13.440000000000001L 16 5.760000000000002L 24 2.8800000000000026L 32 12.48L 40 17.28L 48 10.56L 56 21.12L 64 3.84" fill="none" fill-opacity="1" stroke="rgba(32,107,196,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMaskjtxgrlah)" pathTo="M 0 11.520000000000001L 8 13.440000000000001L 16 5.760000000000002L 24 2.8800000000000026L 32 12.48L 40 17.28L 48 10.56L 56 21.12L 64 3.84" pathFrom="M -1 24L -1 24L 8 24L 16 24L 24 24L 32 24L 40 24L 48 24L 56 24L 64 24"></path><g id="SvgjsG2669" class="apexcharts-series-markers-wrap" data:realIndex="0"></g></g><g id="SvgjsG2670" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2695" x1="0" y1="0" x2="64" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2696" x1="0" y1="0" x2="64" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2697" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG2698" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG2699" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect2663" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2683" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2660" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 12px;"></div></div></div>
                  <div class="resize-triggers"><div class="expand-trigger"><div style="width: 89px; height: 41px;"></div></div><div class="contract-trigger"></div></div></td>
                </tr>
                <tr>
                  <td>
                    /news/1,new-ui-kit.html
                    <a href="#" class="ms-1" aria-label="Open website"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path></svg>
                    </a>
                  </td>
                  <td class="text-muted">3,256</td>
                  <td class="text-muted">2,865</td>
                  <td class="text-muted">72.65%</td>
                  <td class="text-end w-1" style="position: relative;">
                    <div class="chart-sparkline chart-sparkline-sm" id="sparkline-bounce-rate-3" style="min-height: 24px;"><div id="apexchartsvilgs1k4" class="apexcharts-canvas apexchartsvilgs1k4 apexcharts-theme-light" style="width: 64px; height: 24px;"><svg id="SvgjsSvg2700" width="64" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2702" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2701"><clipPath id="gridRectMaskvilgs1k4"><rect id="SvgjsRect2708" width="70" height="26" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskvilgs1k4"><rect id="SvgjsRect2709" width="68" height="28" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine2707" x1="0" y1="0" x2="0" y2="24" stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="24" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG2715" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2716" class="apexcharts-xaxis-texts-g" transform="translate(0, 2.75)"></g></g><g id="SvgjsG2727" class="apexcharts-grid"><g id="SvgjsG2728" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2730" x1="0" y1="0" x2="64" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2731" x1="0" y1="4.8" x2="64" y2="4.8" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2732" x1="0" y1="9.6" x2="64" y2="9.6" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2733" x1="0" y1="14.399999999999999" x2="64" y2="14.399999999999999" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2734" x1="0" y1="19.2" x2="64" y2="19.2" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2735" x1="0" y1="24" x2="64" y2="24" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG2729" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2737" x1="0" y1="24" x2="64" y2="24" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine2736" x1="0" y1="1" x2="0" y2="24" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG2710" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG2711" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath2714" d="M 0 14.4L 8 11.520000000000001L 16 14.4L 24 20.16L 32 7.68L 40 21.12L 48 1.9200000000000017L 56 2.8800000000000026L 64 5.760000000000002" fill="none" fill-opacity="1" stroke="rgba(32,107,196,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMaskvilgs1k4)" pathTo="M 0 14.4L 8 11.520000000000001L 16 14.4L 24 20.16L 32 7.68L 40 21.12L 48 1.9200000000000017L 56 2.8800000000000026L 64 5.760000000000002" pathFrom="M -1 24L -1 24L 8 24L 16 24L 24 24L 32 24L 40 24L 48 24L 56 24L 64 24"></path><g id="SvgjsG2712" class="apexcharts-series-markers-wrap" data:realIndex="0"></g></g><g id="SvgjsG2713" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2738" x1="0" y1="0" x2="64" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2739" x1="0" y1="0" x2="64" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2740" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG2741" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG2742" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect2706" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2726" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2703" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 12px;"></div></div></div>
                  <div class="resize-triggers"><div class="expand-trigger"><div style="width: 89px; height: 41px;"></div></div><div class="contract-trigger"></div></div></td>
                </tr>
                <tr>
                  <td>
                    /lorem-ipsum-dolor-sit-amet-very-long-url.html
                    <a href="#" class="ms-1" aria-label="Open website"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path></svg>
                    </a>
                  </td>
                  <td class="text-muted">986</td>
                  <td class="text-muted">865</td>
                  <td class="text-muted">44.89%</td>
                  <td class="text-end w-1" style="position: relative;">
                    <div class="chart-sparkline chart-sparkline-sm" id="sparkline-bounce-rate-4" style="min-height: 24px;"><div id="apexchartsrhi1358v" class="apexcharts-canvas apexchartsrhi1358v apexcharts-theme-light" style="width: 64px; height: 24px;"><svg id="SvgjsSvg2743" width="64" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2745" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2744"><clipPath id="gridRectMaskrhi1358v"><rect id="SvgjsRect2751" width="70" height="26" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskrhi1358v"><rect id="SvgjsRect2752" width="68" height="28" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine2750" x1="0" y1="0" x2="0" y2="24" stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="24" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG2758" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2759" class="apexcharts-xaxis-texts-g" transform="translate(0, 2.75)"></g></g><g id="SvgjsG2770" class="apexcharts-grid"><g id="SvgjsG2771" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2773" x1="0" y1="0" x2="64" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2774" x1="0" y1="6" x2="64" y2="6" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2775" x1="0" y1="12" x2="64" y2="12" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2776" x1="0" y1="18" x2="64" y2="18" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2777" x1="0" y1="24" x2="64" y2="24" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG2772" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2779" x1="0" y1="24" x2="64" y2="24" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine2778" x1="0" y1="1" x2="0" y2="24" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG2753" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG2754" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath2757" d="M 0 21L 8 7.5L 16 10.5L 24 10.5L 32 22.5L 40 19.5L 48 4.5L 56 0L 64 1.5" fill="none" fill-opacity="1" stroke="rgba(32,107,196,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMaskrhi1358v)" pathTo="M 0 21L 8 7.5L 16 10.5L 24 10.5L 32 22.5L 40 19.5L 48 4.5L 56 0L 64 1.5" pathFrom="M -1 30L -1 30L 8 30L 16 30L 24 30L 32 30L 40 30L 48 30L 56 30L 64 30"></path><g id="SvgjsG2755" class="apexcharts-series-markers-wrap" data:realIndex="0"></g></g><g id="SvgjsG2756" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2780" x1="0" y1="0" x2="64" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2781" x1="0" y1="0" x2="64" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2782" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG2783" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG2784" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect2749" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2769" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2746" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 12px;"></div></div></div>
                  <div class="resize-triggers"><div class="expand-trigger"><div style="width: 89px; height: 41px;"></div></div><div class="contract-trigger"></div></div></td>
                </tr>
                <tr>
                  <td>
                    /colors.html
                    <a href="#" class="ms-1" aria-label="Open website"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path></svg>
                    </a>
                  </td>
                  <td class="text-muted">912</td>
                  <td class="text-muted">822</td>
                  <td class="text-muted">41.12%</td>
                  <td class="text-end w-1" style="position: relative;">
                    <div class="chart-sparkline chart-sparkline-sm" id="sparkline-bounce-rate-5" style="min-height: 24px;"><div id="apexchartswkhlphoh" class="apexcharts-canvas apexchartswkhlphoh apexcharts-theme-light" style="width: 64px; height: 24px;"><svg id="SvgjsSvg2785" width="64" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2787" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2786"><clipPath id="gridRectMaskwkhlphoh"><rect id="SvgjsRect2793" width="70" height="26" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskwkhlphoh"><rect id="SvgjsRect2794" width="68" height="28" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine2792" x1="0" y1="0" x2="0" y2="24" stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="24" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG2800" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2801" class="apexcharts-xaxis-texts-g" transform="translate(0, 2.75)"></g></g><g id="SvgjsG2813" class="apexcharts-grid"><g id="SvgjsG2814" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2816" x1="0" y1="0" x2="64" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2817" x1="0" y1="4.8" x2="64" y2="4.8" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2818" x1="0" y1="9.6" x2="64" y2="9.6" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2819" x1="0" y1="14.399999999999999" x2="64" y2="14.399999999999999" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2820" x1="0" y1="19.2" x2="64" y2="19.2" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2821" x1="0" y1="24" x2="64" y2="24" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG2815" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2823" x1="0" y1="24" x2="64" y2="24" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine2822" x1="0" y1="1" x2="0" y2="24" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG2795" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG2796" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath2799" d="M 0 22.08L 7.111111111111111 13.440000000000001L 14.222222222222221 9.600000000000001L 21.333333333333332 10.56L 28.444444444444443 3.84L 35.55555555555556 4.800000000000001L 42.666666666666664 16.32L 49.77777777777778 1.9200000000000017L 56.888888888888886 6.720000000000002L 64 10.56" fill="none" fill-opacity="1" stroke="rgba(32,107,196,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMaskwkhlphoh)" pathTo="M 0 22.08L 7.111111111111111 13.440000000000001L 14.222222222222221 9.600000000000001L 21.333333333333332 10.56L 28.444444444444443 3.84L 35.55555555555556 4.800000000000001L 42.666666666666664 16.32L 49.77777777777778 1.9200000000000017L 56.888888888888886 6.720000000000002L 64 10.56" pathFrom="M -1 24L -1 24L 7.111111111111111 24L 14.222222222222221 24L 21.333333333333332 24L 28.444444444444443 24L 35.55555555555556 24L 42.666666666666664 24L 49.77777777777778 24L 56.888888888888886 24L 64 24"></path><g id="SvgjsG2797" class="apexcharts-series-markers-wrap" data:realIndex="0"></g></g><g id="SvgjsG2798" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2824" x1="0" y1="0" x2="64" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2825" x1="0" y1="0" x2="64" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2826" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG2827" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG2828" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect2791" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2812" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2788" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 12px;"></div></div></div>
                  <div class="resize-triggers"><div class="expand-trigger"><div style="width: 89px; height: 41px;"></div></div><div class="contract-trigger"></div></div></td>
                </tr>
                <tr>
                  <td>
                    /docs/index.html
                    <a href="#" class="ms-1" aria-label="Open website"><svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path></svg>
                    </a>
                  </td>
                  <td class="text-muted">855</td>
                  <td class="text-muted">798</td>
                  <td class="text-muted">32.65%</td>
                  <td class="text-end w-1" style="position: relative;">
                    <div class="chart-sparkline chart-sparkline-sm" id="sparkline-bounce-rate-6" style="min-height: 24px;"><div id="apexchartss8unoxq8" class="apexcharts-canvas apexchartss8unoxq8 apexcharts-theme-light" style="width: 64px; height: 24px;"><svg id="SvgjsSvg2829" width="64" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" class="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;"><g id="SvgjsG2831" class="apexcharts-inner apexcharts-graphical" transform="translate(0, 0)"><defs id="SvgjsDefs2830"><clipPath id="gridRectMasks8unoxq8"><rect id="SvgjsRect2837" width="70" height="26" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMasks8unoxq8"><rect id="SvgjsRect2838" width="68" height="28" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><line id="SvgjsLine2836" x1="0" y1="0" x2="0" y2="24" stroke="#b6b6b6" stroke-dasharray="3" class="apexcharts-xcrosshairs" x="0" y="0" width="1" height="24" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><g id="SvgjsG2844" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG2845" class="apexcharts-xaxis-texts-g" transform="translate(0, 2.75)"></g></g><g id="SvgjsG2857" class="apexcharts-grid"><g id="SvgjsG2858" class="apexcharts-gridlines-horizontal" style="display: none;"><line id="SvgjsLine2860" x1="0" y1="0" x2="64" y2="0" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2861" x1="0" y1="4.8" x2="64" y2="4.8" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2862" x1="0" y1="9.6" x2="64" y2="9.6" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2863" x1="0" y1="14.399999999999999" x2="64" y2="14.399999999999999" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2864" x1="0" y1="19.2" x2="64" y2="19.2" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line><line id="SvgjsLine2865" x1="0" y1="24" x2="64" y2="24" stroke="#e0e0e0" stroke-dasharray="0" class="apexcharts-gridline"></line></g><g id="SvgjsG2859" class="apexcharts-gridlines-vertical" style="display: none;"></g><line id="SvgjsLine2867" x1="0" y1="24" x2="64" y2="24" stroke="transparent" stroke-dasharray="0"></line><line id="SvgjsLine2866" x1="0" y1="1" x2="0" y2="24" stroke="transparent" stroke-dasharray="0"></line></g><g id="SvgjsG2839" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG2840" class="apexcharts-series" seriesName="seriesx1" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath2843" d="M 0 2.8800000000000026L 7.111111111111111 12.48L 14.222222222222221 17.28L 21.333333333333332 10.56L 28.444444444444443 21.12L 35.55555555555556 3.84L 42.666666666666664 16.32L 49.77777777777778 1.9200000000000017L 56.888888888888886 6.720000000000002L 64 10.56" fill="none" fill-opacity="1" stroke="rgba(32,107,196,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="2" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMasks8unoxq8)" pathTo="M 0 2.8800000000000026L 7.111111111111111 12.48L 14.222222222222221 17.28L 21.333333333333332 10.56L 28.444444444444443 21.12L 35.55555555555556 3.84L 42.666666666666664 16.32L 49.77777777777778 1.9200000000000017L 56.888888888888886 6.720000000000002L 64 10.56" pathFrom="M -1 24L -1 24L 7.111111111111111 24L 14.222222222222221 24L 21.333333333333332 24L 28.444444444444443 24L 35.55555555555556 24L 42.666666666666664 24L 49.77777777777778 24L 56.888888888888886 24L 64 24"></path><g id="SvgjsG2841" class="apexcharts-series-markers-wrap" data:realIndex="0"></g></g><g id="SvgjsG2842" class="apexcharts-datalabels" data:realIndex="0"></g></g><line id="SvgjsLine2868" x1="0" y1="0" x2="64" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2869" x1="0" y1="0" x2="64" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG2870" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG2871" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG2872" class="apexcharts-point-annotations"></g></g><rect id="SvgjsRect2835" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect><g id="SvgjsG2856" class="apexcharts-yaxis" rel="0" transform="translate(-18, 0)"></g><g id="SvgjsG2832" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend" style="max-height: 12px;"></div></div></div>
                  <div class="resize-triggers"><div class="expand-trigger"><div style="width: 89px; height: 41px;"></div></div><div class="contract-trigger"></div></div></td>
                </tr>
              </tbody></table>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <a href="https://github.com/sponsors/codecalm" class="card card-sponsor" target="_blank" rel="noopener" style="background-image: url(./static/sponsor-banner-homepage.svg)" aria-label="Sponsor Tabler!">
            <div class="card-body"></div>
          </a>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Social Media Traffic</h3>
            </div>
            <table class="table card-table table-vcenter">
              <thead>
                <tr>
                  <th>Network</th>
                  <th colspan="2">Visitors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Instagram</td>
                  <td>3,550</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" style="width: 71.0%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>1,798</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" style="width: 35.96%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>1,245</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" style="width: 24.9%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>TikTok</td>
                  <td>986</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" style="width: 19.72%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Pinterest</td>
                  <td>854</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" style="width: 17.08%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>VK</td>
                  <td>650</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" style="width: 13.0%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Pinterest</td>
                  <td>420</td>
                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div class="progress-bar bg-primary" style="width: 8.4%"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-12 col-lg-8">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Tasks</h3>
            </div>
            <div class="table-responsive">
              <table class="table card-table table-vcenter">
                <tbody><tr>
                  <td class="w-1 pe-0">
                    <input type="checkbox" class="form-check-input m-0 align-middle" aria-label="Select task" checked="">
                  </td>
                  <td class="w-100">
                    <a href="#" class="text-reset">Extend the data model.</a>
                  </td>
                  <td class="text-nowrap text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><line x1="11" y1="15" x2="12" y2="15"></line><line x1="12" y1="15" x2="12" y2="18"></line></svg>
                    January 01, 2019
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                      2/7
                    </a>
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>
                      3</a>
                  </td>
                  <td>
                    <span class="avatar avatar-sm" style="background-image: url(./static/avatars/000m.jpg)"></span>
                  </td>
                </tr>
                <tr>
                  <td class="w-1 pe-0">
                    <input type="checkbox" class="form-check-input m-0 align-middle" aria-label="Select task">
                  </td>
                  <td class="w-100">
                    <a href="#" class="text-reset">Verify the event flow.</a>
                  </td>
                  <td class="text-nowrap text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><line x1="11" y1="15" x2="12" y2="15"></line><line x1="12" y1="15" x2="12" y2="18"></line></svg>
                    January 01, 2019
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                      3/10
                    </a>
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>
                      6</a>
                  </td>
                  <td>
                    <span class="avatar avatar-sm">JL</span>
                  </td>
                </tr>
                <tr>
                  <td class="w-1 pe-0">
                    <input type="checkbox" class="form-check-input m-0 align-middle" aria-label="Select task">
                  </td>
                  <td class="w-100">
                    <a href="#" class="text-reset">Database backup and maintenance</a>
                  </td>
                  <td class="text-nowrap text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><line x1="11" y1="15" x2="12" y2="15"></line><line x1="12" y1="15" x2="12" y2="18"></line></svg>
                    January 01, 2019
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                      0/6
                    </a>
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>
                      1</a>
                  </td>
                  <td>
                    <span class="avatar avatar-sm" style="background-image: url(./static/avatars/002m.jpg)"></span>
                  </td>
                </tr>
                <tr>
                  <td class="w-1 pe-0">
                    <input type="checkbox" class="form-check-input m-0 align-middle" aria-label="Select task" checked="">
                  </td>
                  <td class="w-100">
                    <a href="#" class="text-reset">Identify the implementation team.</a>
                  </td>
                  <td class="text-nowrap text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><line x1="11" y1="15" x2="12" y2="15"></line><line x1="12" y1="15" x2="12" y2="18"></line></svg>
                    January 01, 2019
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                      6/10
                    </a>
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>
                      12</a>
                  </td>
                  <td>
                    <span class="avatar avatar-sm" style="background-image: url(./static/avatars/003m.jpg)"></span>
                  </td>
                </tr>
                <tr>
                  <td class="w-1 pe-0">
                    <input type="checkbox" class="form-check-input m-0 align-middle" aria-label="Select task">
                  </td>
                  <td class="w-100">
                    <a href="#" class="text-reset">Define users and workflow</a>
                  </td>
                  <td class="text-nowrap text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><line x1="11" y1="15" x2="12" y2="15"></line><line x1="12" y1="15" x2="12" y2="18"></line></svg>
                    January 01, 2019
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                      3/7
                    </a>
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>
                      5</a>
                  </td>
                  <td>
                    <span class="avatar avatar-sm" style="background-image: url(./static/avatars/000f.jpg)"></span>
                  </td>
                </tr>
                <tr>
                  <td class="w-1 pe-0">
                    <input type="checkbox" class="form-check-input m-0 align-middle" aria-label="Select task" checked="">
                  </td>
                  <td class="w-100">
                    <a href="#" class="text-reset">Check Pull Requests</a>
                  </td>
                  <td class="text-nowrap text-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="5" width="16" height="16" rx="2"></rect><line x1="16" y1="3" x2="16" y2="7"></line><line x1="8" y1="3" x2="8" y2="7"></line><line x1="4" y1="11" x2="20" y2="11"></line><line x1="11" y1="15" x2="12" y2="15"></line><line x1="12" y1="15" x2="12" y2="18"></line></svg>
                    January 01, 2019
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>
                      2/9
                    </a>
                  </td>
                  <td class="text-nowrap">
                    <a href="#" class="text-muted">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"></path><line x1="8" y1="9" x2="16" y2="9"></line><line x1="8" y1="13" x2="14" y2="13"></line></svg>
                      3</a>
                  </td>
                  <td>
                    <span class="avatar avatar-sm" style="background-image: url(./static/avatars/001f.jpg)"></span>
                  </td>
                </tr>
              </tbody></table>
            </div>
          </div>
        </div>
        <div class="col-12">
         
        </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: "Home",
  components: { PageHeader },
};
</script>
