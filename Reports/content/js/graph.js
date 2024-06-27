/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 500.0, "minX": 0.0, "maxY": 9345.0, "series": [{"data": [[0.0, 500.0], [0.1, 507.0], [0.2, 509.0], [0.3, 511.0], [0.4, 512.0], [0.5, 513.0], [0.6, 514.0], [0.7, 514.0], [0.8, 515.0], [0.9, 516.0], [1.0, 516.0], [1.1, 516.0], [1.2, 517.0], [1.3, 517.0], [1.4, 518.0], [1.5, 518.0], [1.6, 519.0], [1.7, 519.0], [1.8, 520.0], [1.9, 520.0], [2.0, 521.0], [2.1, 521.0], [2.2, 522.0], [2.3, 522.0], [2.4, 522.0], [2.5, 523.0], [2.6, 523.0], [2.7, 523.0], [2.8, 524.0], [2.9, 524.0], [3.0, 524.0], [3.1, 525.0], [3.2, 525.0], [3.3, 526.0], [3.4, 526.0], [3.5, 526.0], [3.6, 527.0], [3.7, 527.0], [3.8, 527.0], [3.9, 528.0], [4.0, 528.0], [4.1, 528.0], [4.2, 529.0], [4.3, 529.0], [4.4, 529.0], [4.5, 529.0], [4.6, 530.0], [4.7, 530.0], [4.8, 531.0], [4.9, 531.0], [5.0, 531.0], [5.1, 532.0], [5.2, 532.0], [5.3, 532.0], [5.4, 533.0], [5.5, 533.0], [5.6, 533.0], [5.7, 533.0], [5.8, 534.0], [5.9, 534.0], [6.0, 535.0], [6.1, 535.0], [6.2, 535.0], [6.3, 536.0], [6.4, 536.0], [6.5, 536.0], [6.6, 537.0], [6.7, 537.0], [6.8, 537.0], [6.9, 537.0], [7.0, 538.0], [7.1, 538.0], [7.2, 538.0], [7.3, 539.0], [7.4, 539.0], [7.5, 539.0], [7.6, 540.0], [7.7, 540.0], [7.8, 540.0], [7.9, 541.0], [8.0, 541.0], [8.1, 542.0], [8.2, 542.0], [8.3, 542.0], [8.4, 542.0], [8.5, 543.0], [8.6, 543.0], [8.7, 543.0], [8.8, 544.0], [8.9, 544.0], [9.0, 544.0], [9.1, 545.0], [9.2, 545.0], [9.3, 545.0], [9.4, 546.0], [9.5, 546.0], [9.6, 546.0], [9.7, 546.0], [9.8, 547.0], [9.9, 547.0], [10.0, 547.0], [10.1, 547.0], [10.2, 547.0], [10.3, 548.0], [10.4, 548.0], [10.5, 548.0], [10.6, 548.0], [10.7, 549.0], [10.8, 549.0], [10.9, 549.0], [11.0, 549.0], [11.1, 550.0], [11.2, 550.0], [11.3, 550.0], [11.4, 550.0], [11.5, 550.0], [11.6, 551.0], [11.7, 551.0], [11.8, 551.0], [11.9, 551.0], [12.0, 551.0], [12.1, 552.0], [12.2, 552.0], [12.3, 552.0], [12.4, 552.0], [12.5, 552.0], [12.6, 552.0], [12.7, 553.0], [12.8, 553.0], [12.9, 553.0], [13.0, 553.0], [13.1, 553.0], [13.2, 554.0], [13.3, 554.0], [13.4, 554.0], [13.5, 554.0], [13.6, 554.0], [13.7, 554.0], [13.8, 555.0], [13.9, 555.0], [14.0, 555.0], [14.1, 555.0], [14.2, 555.0], [14.3, 556.0], [14.4, 556.0], [14.5, 556.0], [14.6, 556.0], [14.7, 556.0], [14.8, 556.0], [14.9, 557.0], [15.0, 557.0], [15.1, 557.0], [15.2, 557.0], [15.3, 557.0], [15.4, 558.0], [15.5, 558.0], [15.6, 558.0], [15.7, 558.0], [15.8, 558.0], [15.9, 558.0], [16.0, 558.0], [16.1, 559.0], [16.2, 559.0], [16.3, 559.0], [16.4, 559.0], [16.5, 559.0], [16.6, 559.0], [16.7, 559.0], [16.8, 560.0], [16.9, 560.0], [17.0, 560.0], [17.1, 560.0], [17.2, 560.0], [17.3, 560.0], [17.4, 561.0], [17.5, 561.0], [17.6, 561.0], [17.7, 561.0], [17.8, 561.0], [17.9, 561.0], [18.0, 561.0], [18.1, 562.0], [18.2, 562.0], [18.3, 562.0], [18.4, 562.0], [18.5, 562.0], [18.6, 562.0], [18.7, 563.0], [18.8, 563.0], [18.9, 563.0], [19.0, 563.0], [19.1, 563.0], [19.2, 563.0], [19.3, 563.0], [19.4, 563.0], [19.5, 564.0], [19.6, 564.0], [19.7, 564.0], [19.8, 564.0], [19.9, 564.0], [20.0, 565.0], [20.1, 565.0], [20.2, 565.0], [20.3, 565.0], [20.4, 565.0], [20.5, 565.0], [20.6, 565.0], [20.7, 565.0], [20.8, 566.0], [20.9, 566.0], [21.0, 566.0], [21.1, 566.0], [21.2, 566.0], [21.3, 566.0], [21.4, 566.0], [21.5, 566.0], [21.6, 567.0], [21.7, 567.0], [21.8, 567.0], [21.9, 567.0], [22.0, 567.0], [22.1, 567.0], [22.2, 567.0], [22.3, 568.0], [22.4, 568.0], [22.5, 568.0], [22.6, 568.0], [22.7, 568.0], [22.8, 568.0], [22.9, 568.0], [23.0, 569.0], [23.1, 569.0], [23.2, 569.0], [23.3, 569.0], [23.4, 569.0], [23.5, 569.0], [23.6, 569.0], [23.7, 569.0], [23.8, 569.0], [23.9, 570.0], [24.0, 570.0], [24.1, 570.0], [24.2, 570.0], [24.3, 570.0], [24.4, 571.0], [24.5, 571.0], [24.6, 571.0], [24.7, 571.0], [24.8, 571.0], [24.9, 571.0], [25.0, 571.0], [25.1, 572.0], [25.2, 572.0], [25.3, 572.0], [25.4, 572.0], [25.5, 572.0], [25.6, 572.0], [25.7, 572.0], [25.8, 572.0], [25.9, 573.0], [26.0, 573.0], [26.1, 573.0], [26.2, 573.0], [26.3, 573.0], [26.4, 573.0], [26.5, 573.0], [26.6, 573.0], [26.7, 574.0], [26.8, 574.0], [26.9, 574.0], [27.0, 574.0], [27.1, 574.0], [27.2, 574.0], [27.3, 574.0], [27.4, 575.0], [27.5, 575.0], [27.6, 575.0], [27.7, 575.0], [27.8, 575.0], [27.9, 575.0], [28.0, 575.0], [28.1, 576.0], [28.2, 576.0], [28.3, 576.0], [28.4, 576.0], [28.5, 576.0], [28.6, 576.0], [28.7, 577.0], [28.8, 577.0], [28.9, 577.0], [29.0, 577.0], [29.1, 577.0], [29.2, 577.0], [29.3, 578.0], [29.4, 578.0], [29.5, 578.0], [29.6, 578.0], [29.7, 578.0], [29.8, 578.0], [29.9, 578.0], [30.0, 579.0], [30.1, 579.0], [30.2, 579.0], [30.3, 579.0], [30.4, 579.0], [30.5, 580.0], [30.6, 580.0], [30.7, 580.0], [30.8, 580.0], [30.9, 580.0], [31.0, 580.0], [31.1, 581.0], [31.2, 581.0], [31.3, 581.0], [31.4, 581.0], [31.5, 581.0], [31.6, 582.0], [31.7, 582.0], [31.8, 582.0], [31.9, 582.0], [32.0, 582.0], [32.1, 583.0], [32.2, 583.0], [32.3, 583.0], [32.4, 583.0], [32.5, 584.0], [32.6, 584.0], [32.7, 584.0], [32.8, 584.0], [32.9, 585.0], [33.0, 585.0], [33.1, 585.0], [33.2, 585.0], [33.3, 585.0], [33.4, 586.0], [33.5, 586.0], [33.6, 586.0], [33.7, 587.0], [33.8, 587.0], [33.9, 587.0], [34.0, 587.0], [34.1, 588.0], [34.2, 588.0], [34.3, 588.0], [34.4, 589.0], [34.5, 589.0], [34.6, 589.0], [34.7, 590.0], [34.8, 590.0], [34.9, 591.0], [35.0, 591.0], [35.1, 591.0], [35.2, 591.0], [35.3, 591.0], [35.4, 592.0], [35.5, 592.0], [35.6, 592.0], [35.7, 593.0], [35.8, 594.0], [35.9, 594.0], [36.0, 594.0], [36.1, 595.0], [36.2, 595.0], [36.3, 596.0], [36.4, 596.0], [36.5, 597.0], [36.6, 597.0], [36.7, 598.0], [36.8, 598.0], [36.9, 599.0], [37.0, 600.0], [37.1, 600.0], [37.2, 601.0], [37.3, 601.0], [37.4, 602.0], [37.5, 603.0], [37.6, 604.0], [37.7, 605.0], [37.8, 605.0], [37.9, 606.0], [38.0, 607.0], [38.1, 608.0], [38.2, 609.0], [38.3, 610.0], [38.4, 611.0], [38.5, 612.0], [38.6, 613.0], [38.7, 614.0], [38.8, 616.0], [38.9, 617.0], [39.0, 618.0], [39.1, 620.0], [39.2, 621.0], [39.3, 623.0], [39.4, 625.0], [39.5, 627.0], [39.6, 630.0], [39.7, 632.0], [39.8, 633.0], [39.9, 635.0], [40.0, 637.0], [40.1, 639.0], [40.2, 641.0], [40.3, 643.0], [40.4, 645.0], [40.5, 646.0], [40.6, 649.0], [40.7, 653.0], [40.8, 656.0], [40.9, 659.0], [41.0, 660.0], [41.1, 664.0], [41.2, 669.0], [41.3, 673.0], [41.4, 678.0], [41.5, 683.0], [41.6, 686.0], [41.7, 699.0], [41.8, 705.0], [41.9, 710.0], [42.0, 720.0], [42.1, 734.0], [42.2, 741.0], [42.3, 743.0], [42.4, 744.0], [42.5, 745.0], [42.6, 745.0], [42.7, 746.0], [42.8, 746.0], [42.9, 747.0], [43.0, 747.0], [43.1, 748.0], [43.2, 748.0], [43.3, 748.0], [43.4, 748.0], [43.5, 749.0], [43.6, 749.0], [43.7, 749.0], [43.8, 749.0], [43.9, 749.0], [44.0, 750.0], [44.1, 750.0], [44.2, 750.0], [44.3, 750.0], [44.4, 750.0], [44.5, 751.0], [44.6, 751.0], [44.7, 751.0], [44.8, 751.0], [44.9, 751.0], [45.0, 751.0], [45.1, 751.0], [45.2, 752.0], [45.3, 752.0], [45.4, 752.0], [45.5, 752.0], [45.6, 752.0], [45.7, 752.0], [45.8, 752.0], [45.9, 753.0], [46.0, 753.0], [46.1, 753.0], [46.2, 753.0], [46.3, 753.0], [46.4, 753.0], [46.5, 753.0], [46.6, 753.0], [46.7, 753.0], [46.8, 754.0], [46.9, 754.0], [47.0, 754.0], [47.1, 754.0], [47.2, 754.0], [47.3, 754.0], [47.4, 754.0], [47.5, 754.0], [47.6, 754.0], [47.7, 755.0], [47.8, 755.0], [47.9, 755.0], [48.0, 755.0], [48.1, 755.0], [48.2, 755.0], [48.3, 755.0], [48.4, 755.0], [48.5, 755.0], [48.6, 755.0], [48.7, 755.0], [48.8, 755.0], [48.9, 756.0], [49.0, 756.0], [49.1, 756.0], [49.2, 756.0], [49.3, 756.0], [49.4, 756.0], [49.5, 756.0], [49.6, 756.0], [49.7, 756.0], [49.8, 756.0], [49.9, 757.0], [50.0, 757.0], [50.1, 757.0], [50.2, 757.0], [50.3, 757.0], [50.4, 757.0], [50.5, 757.0], [50.6, 757.0], [50.7, 757.0], [50.8, 757.0], [50.9, 757.0], [51.0, 758.0], [51.1, 758.0], [51.2, 758.0], [51.3, 758.0], [51.4, 758.0], [51.5, 758.0], [51.6, 758.0], [51.7, 758.0], [51.8, 758.0], [51.9, 758.0], [52.0, 759.0], [52.1, 759.0], [52.2, 759.0], [52.3, 759.0], [52.4, 759.0], [52.5, 759.0], [52.6, 759.0], [52.7, 759.0], [52.8, 759.0], [52.9, 759.0], [53.0, 760.0], [53.1, 760.0], [53.2, 760.0], [53.3, 760.0], [53.4, 760.0], [53.5, 760.0], [53.6, 760.0], [53.7, 760.0], [53.8, 760.0], [53.9, 760.0], [54.0, 760.0], [54.1, 760.0], [54.2, 761.0], [54.3, 761.0], [54.4, 761.0], [54.5, 761.0], [54.6, 761.0], [54.7, 761.0], [54.8, 761.0], [54.9, 761.0], [55.0, 761.0], [55.1, 761.0], [55.2, 761.0], [55.3, 762.0], [55.4, 762.0], [55.5, 762.0], [55.6, 762.0], [55.7, 762.0], [55.8, 762.0], [55.9, 762.0], [56.0, 762.0], [56.1, 762.0], [56.2, 762.0], [56.3, 762.0], [56.4, 762.0], [56.5, 762.0], [56.6, 763.0], [56.7, 763.0], [56.8, 763.0], [56.9, 763.0], [57.0, 763.0], [57.1, 763.0], [57.2, 763.0], [57.3, 763.0], [57.4, 763.0], [57.5, 763.0], [57.6, 763.0], [57.7, 763.0], [57.8, 763.0], [57.9, 764.0], [58.0, 764.0], [58.1, 764.0], [58.2, 764.0], [58.3, 764.0], [58.4, 764.0], [58.5, 764.0], [58.6, 764.0], [58.7, 764.0], [58.8, 764.0], [58.9, 764.0], [59.0, 764.0], [59.1, 765.0], [59.2, 765.0], [59.3, 765.0], [59.4, 765.0], [59.5, 765.0], [59.6, 765.0], [59.7, 765.0], [59.8, 765.0], [59.9, 765.0], [60.0, 765.0], [60.1, 765.0], [60.2, 765.0], [60.3, 765.0], [60.4, 765.0], [60.5, 765.0], [60.6, 766.0], [60.7, 766.0], [60.8, 766.0], [60.9, 766.0], [61.0, 766.0], [61.1, 766.0], [61.2, 766.0], [61.3, 766.0], [61.4, 766.0], [61.5, 766.0], [61.6, 766.0], [61.7, 766.0], [61.8, 766.0], [61.9, 766.0], [62.0, 766.0], [62.1, 766.0], [62.2, 767.0], [62.3, 767.0], [62.4, 767.0], [62.5, 767.0], [62.6, 767.0], [62.7, 767.0], [62.8, 767.0], [62.9, 767.0], [63.0, 767.0], [63.1, 767.0], [63.2, 767.0], [63.3, 767.0], [63.4, 767.0], [63.5, 767.0], [63.6, 767.0], [63.7, 767.0], [63.8, 767.0], [63.9, 768.0], [64.0, 768.0], [64.1, 768.0], [64.2, 768.0], [64.3, 768.0], [64.4, 768.0], [64.5, 768.0], [64.6, 768.0], [64.7, 768.0], [64.8, 768.0], [64.9, 768.0], [65.0, 768.0], [65.1, 768.0], [65.2, 768.0], [65.3, 768.0], [65.4, 768.0], [65.5, 768.0], [65.6, 769.0], [65.7, 769.0], [65.8, 769.0], [65.9, 769.0], [66.0, 769.0], [66.1, 769.0], [66.2, 769.0], [66.3, 769.0], [66.4, 769.0], [66.5, 769.0], [66.6, 769.0], [66.7, 769.0], [66.8, 769.0], [66.9, 769.0], [67.0, 769.0], [67.1, 769.0], [67.2, 770.0], [67.3, 770.0], [67.4, 770.0], [67.5, 770.0], [67.6, 770.0], [67.7, 770.0], [67.8, 770.0], [67.9, 770.0], [68.0, 770.0], [68.1, 770.0], [68.2, 770.0], [68.3, 770.0], [68.4, 770.0], [68.5, 770.0], [68.6, 770.0], [68.7, 770.0], [68.8, 770.0], [68.9, 771.0], [69.0, 771.0], [69.1, 771.0], [69.2, 771.0], [69.3, 771.0], [69.4, 771.0], [69.5, 771.0], [69.6, 771.0], [69.7, 771.0], [69.8, 771.0], [69.9, 771.0], [70.0, 771.0], [70.1, 771.0], [70.2, 771.0], [70.3, 772.0], [70.4, 772.0], [70.5, 772.0], [70.6, 772.0], [70.7, 772.0], [70.8, 772.0], [70.9, 772.0], [71.0, 772.0], [71.1, 772.0], [71.2, 772.0], [71.3, 772.0], [71.4, 772.0], [71.5, 772.0], [71.6, 772.0], [71.7, 772.0], [71.8, 773.0], [71.9, 773.0], [72.0, 773.0], [72.1, 773.0], [72.2, 773.0], [72.3, 773.0], [72.4, 773.0], [72.5, 773.0], [72.6, 773.0], [72.7, 773.0], [72.8, 773.0], [72.9, 773.0], [73.0, 773.0], [73.1, 773.0], [73.2, 774.0], [73.3, 774.0], [73.4, 774.0], [73.5, 774.0], [73.6, 774.0], [73.7, 774.0], [73.8, 774.0], [73.9, 774.0], [74.0, 774.0], [74.1, 774.0], [74.2, 774.0], [74.3, 774.0], [74.4, 774.0], [74.5, 774.0], [74.6, 775.0], [74.7, 775.0], [74.8, 775.0], [74.9, 775.0], [75.0, 775.0], [75.1, 775.0], [75.2, 775.0], [75.3, 775.0], [75.4, 775.0], [75.5, 775.0], [75.6, 775.0], [75.7, 775.0], [75.8, 775.0], [75.9, 776.0], [76.0, 776.0], [76.1, 776.0], [76.2, 776.0], [76.3, 776.0], [76.4, 776.0], [76.5, 776.0], [76.6, 776.0], [76.7, 776.0], [76.8, 776.0], [76.9, 776.0], [77.0, 776.0], [77.1, 777.0], [77.2, 777.0], [77.3, 777.0], [77.4, 777.0], [77.5, 777.0], [77.6, 777.0], [77.7, 777.0], [77.8, 777.0], [77.9, 777.0], [78.0, 777.0], [78.1, 777.0], [78.2, 778.0], [78.3, 778.0], [78.4, 778.0], [78.5, 778.0], [78.6, 778.0], [78.7, 778.0], [78.8, 778.0], [78.9, 778.0], [79.0, 778.0], [79.1, 778.0], [79.2, 778.0], [79.3, 779.0], [79.4, 779.0], [79.5, 779.0], [79.6, 779.0], [79.7, 779.0], [79.8, 779.0], [79.9, 779.0], [80.0, 779.0], [80.1, 779.0], [80.2, 779.0], [80.3, 780.0], [80.4, 780.0], [80.5, 780.0], [80.6, 780.0], [80.7, 780.0], [80.8, 780.0], [80.9, 780.0], [81.0, 780.0], [81.1, 780.0], [81.2, 781.0], [81.3, 781.0], [81.4, 781.0], [81.5, 781.0], [81.6, 781.0], [81.7, 781.0], [81.8, 781.0], [81.9, 781.0], [82.0, 781.0], [82.1, 782.0], [82.2, 782.0], [82.3, 782.0], [82.4, 782.0], [82.5, 782.0], [82.6, 782.0], [82.7, 782.0], [82.8, 782.0], [82.9, 783.0], [83.0, 783.0], [83.1, 783.0], [83.2, 783.0], [83.3, 783.0], [83.4, 783.0], [83.5, 783.0], [83.6, 783.0], [83.7, 783.0], [83.8, 784.0], [83.9, 784.0], [84.0, 784.0], [84.1, 784.0], [84.2, 784.0], [84.3, 784.0], [84.4, 784.0], [84.5, 784.0], [84.6, 785.0], [84.7, 785.0], [84.8, 785.0], [84.9, 785.0], [85.0, 785.0], [85.1, 785.0], [85.2, 785.0], [85.3, 786.0], [85.4, 786.0], [85.5, 786.0], [85.6, 786.0], [85.7, 786.0], [85.8, 787.0], [85.9, 787.0], [86.0, 787.0], [86.1, 787.0], [86.2, 788.0], [86.3, 788.0], [86.4, 788.0], [86.5, 788.0], [86.6, 788.0], [86.7, 789.0], [86.8, 789.0], [86.9, 789.0], [87.0, 789.0], [87.1, 789.0], [87.2, 790.0], [87.3, 790.0], [87.4, 790.0], [87.5, 790.0], [87.6, 791.0], [87.7, 791.0], [87.8, 791.0], [87.9, 791.0], [88.0, 791.0], [88.1, 792.0], [88.2, 792.0], [88.3, 792.0], [88.4, 793.0], [88.5, 793.0], [88.6, 793.0], [88.7, 794.0], [88.8, 794.0], [88.9, 794.0], [89.0, 795.0], [89.1, 795.0], [89.2, 795.0], [89.3, 796.0], [89.4, 796.0], [89.5, 796.0], [89.6, 797.0], [89.7, 797.0], [89.8, 797.0], [89.9, 798.0], [90.0, 798.0], [90.1, 799.0], [90.2, 799.0], [90.3, 799.0], [90.4, 800.0], [90.5, 801.0], [90.6, 801.0], [90.7, 802.0], [90.8, 802.0], [90.9, 803.0], [91.0, 803.0], [91.1, 804.0], [91.2, 804.0], [91.3, 805.0], [91.4, 806.0], [91.5, 806.0], [91.6, 807.0], [91.7, 808.0], [91.8, 809.0], [91.9, 809.0], [92.0, 810.0], [92.1, 811.0], [92.2, 813.0], [92.3, 814.0], [92.4, 814.0], [92.5, 816.0], [92.6, 817.0], [92.7, 818.0], [92.8, 819.0], [92.9, 820.0], [93.0, 821.0], [93.1, 822.0], [93.2, 823.0], [93.3, 824.0], [93.4, 825.0], [93.5, 826.0], [93.6, 826.0], [93.7, 827.0], [93.8, 828.0], [93.9, 830.0], [94.0, 830.0], [94.1, 832.0], [94.2, 833.0], [94.3, 834.0], [94.4, 835.0], [94.5, 836.0], [94.6, 837.0], [94.7, 838.0], [94.8, 839.0], [94.9, 840.0], [95.0, 841.0], [95.1, 842.0], [95.2, 844.0], [95.3, 845.0], [95.4, 845.0], [95.5, 847.0], [95.6, 848.0], [95.7, 849.0], [95.8, 850.0], [95.9, 851.0], [96.0, 852.0], [96.1, 854.0], [96.2, 855.0], [96.3, 856.0], [96.4, 858.0], [96.5, 860.0], [96.6, 862.0], [96.7, 864.0], [96.8, 866.0], [96.9, 869.0], [97.0, 871.0], [97.1, 875.0], [97.2, 877.0], [97.3, 880.0], [97.4, 885.0], [97.5, 890.0], [97.6, 894.0], [97.7, 896.0], [97.8, 899.0], [97.9, 904.0], [98.0, 906.0], [98.1, 914.0], [98.2, 917.0], [98.3, 923.0], [98.4, 929.0], [98.5, 932.0], [98.6, 944.0], [98.7, 960.0], [98.8, 972.0], [98.9, 986.0], [99.0, 1028.0], [99.1, 1080.0], [99.2, 1225.0], [99.3, 1658.0], [99.4, 1833.0], [99.5, 2380.0], [99.6, 3058.0], [99.7, 4846.0], [99.8, 6441.0], [99.9, 8408.0]], "isOverall": false, "label": "book api", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 6806.0, "series": [{"data": [[600.0, 662.0], [700.0, 6806.0], [800.0, 1049.0], [900.0, 157.0], [1000.0, 29.0], [1100.0, 6.0], [1200.0, 6.0], [1300.0, 2.0], [1400.0, 2.0], [1500.0, 2.0], [1600.0, 8.0], [1700.0, 7.0], [1800.0, 6.0], [1900.0, 3.0], [2000.0, 1.0], [2100.0, 4.0], [2200.0, 2.0], [2300.0, 2.0], [2400.0, 4.0], [2500.0, 5.0], [2600.0, 2.0], [2700.0, 2.0], [3000.0, 2.0], [3300.0, 1.0], [3200.0, 1.0], [3600.0, 1.0], [3700.0, 1.0], [3900.0, 2.0], [4000.0, 1.0], [4100.0, 1.0], [4200.0, 1.0], [4600.0, 1.0], [4700.0, 2.0], [4800.0, 1.0], [4900.0, 2.0], [5200.0, 1.0], [5300.0, 1.0], [5500.0, 3.0], [5600.0, 1.0], [5800.0, 1.0], [6000.0, 1.0], [5900.0, 1.0], [6300.0, 1.0], [6200.0, 1.0], [6400.0, 1.0], [6700.0, 2.0], [6800.0, 1.0], [7000.0, 1.0], [7200.0, 4.0], [7500.0, 1.0], [7800.0, 2.0], [8100.0, 1.0], [8300.0, 1.0], [8400.0, 2.0], [8600.0, 1.0], [8900.0, 4.0], [8800.0, 2.0], [9000.0, 4.0], [9300.0, 1.0], [500.0, 5177.0]], "isOverall": false, "label": "book api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 13895.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 13895.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 104.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.7792207792207835, "minX": 1.7194338E12, "maxY": 27.414798206278036, "series": [{"data": [[1.71943452E12, 5.94255319148936], [1.71943422E12, 6.1958762886597905], [1.71943512E12, 13.43103448275861], [1.71943482E12, 6.682302771855007], [1.71943542E12, 23.44301075268816], [1.7194344E12, 5.800429184549353], [1.7194338E12, 11.48944337811899], [1.7194341E12, 5.941810344827588], [1.719435E12, 9.452991452991448], [1.7194347E12, 5.952688172043014], [1.7194353E12, 19.31974248927039], [1.71943428E12, 5.851931330472105], [1.71943398E12, 5.941935483870967], [1.71943488E12, 5.869565217391298], [1.71943458E12, 5.821120689655171], [1.71943386E12, 6.057324840764332], [1.71943548E12, 25.28479657387579], [1.71943518E12, 15.37553648068668], [1.71943416E12, 6.129753914988816], [1.71943476E12, 5.7792207792207835], [1.71943446E12, 5.952277657266813], [1.71943536E12, 21.4331896551724], [1.71943506E12, 11.502145922746784], [1.71943404E12, 5.865096359743041], [1.71943464E12, 5.890322580645156], [1.71943434E12, 6.032327586206896], [1.71943524E12, 17.458064516129035], [1.71943392E12, 5.98706896551724], [1.71943494E12, 7.475374732334047], [1.71943554E12, 27.414798206278036]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71943554E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 656.2376902417185, "minX": 1.0, "maxY": 9050.0, "series": [{"data": [[2.0, 804.0], [3.0, 657.0294117647059], [4.0, 723.2366412213738], [5.0, 656.2376902417185], [6.0, 679.3645514223193], [7.0, 756.796664873589], [8.0, 736.6261398176291], [9.0, 700.315789473684], [10.0, 706.2281368821293], [11.0, 712.9578059071735], [12.0, 712.1694214876032], [13.0, 781.7736625514401], [14.0, 746.145833333333], [15.0, 746.4486692015209], [16.0, 693.4248927038628], [17.0, 713.8921161825727], [18.0, 714.3303571428573], [19.0, 735.0307692307687], [20.0, 724.3586497890298], [21.0, 704.7877358490566], [22.0, 698.5630252100842], [23.0, 730.1890756302522], [24.0, 699.2127659574471], [25.0, 717.6569343065695], [26.0, 685.5745614035089], [27.0, 735.2817679558012], [28.0, 747.090909090909], [29.0, 801.2391304347826], [30.0, 875.8], [32.0, 6939.0], [35.0, 9050.0], [34.0, 8673.0], [36.0, 4963.0], [38.0, 6013.5], [40.0, 7710.0], [43.0, 8890.0], [42.0, 5911.0], [45.0, 5894.0], [44.0, 6441.0], [46.0, 4661.0], [49.0, 6700.0], [51.0, 8983.0], [50.0, 4011.0], [53.0, 7531.0], [52.0, 2484.0], [54.0, 4223.0], [57.0, 3058.0], [56.0, 6828.0], [58.0, 2533.0], [61.0, 8439.0], [60.0, 3058.0], [63.0, 8951.0], [62.0, 2473.0], [66.0, 5617.0], [71.0, 7202.0], [70.0, 2482.0], [68.0, 3991.0], [75.0, 6327.818181818182], [72.0, 5520.0], [1.0, 796.0]], "isOverall": false, "label": "book api", "isController": false}, {"data": [[10.340928571428556, 719.8017142857135]], "isOverall": false, "label": "book api-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 75.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 973.7666666666667, "minX": 1.7194338E12, "maxY": 41350.03333333333, "series": [{"data": [[1.71943452E12, 37302.333333333336], [1.71943422E12, 38492.833333333336], [1.71943512E12, 36826.13333333333], [1.71943482E12, 37222.96666666667], [1.71943542E12, 36905.5], [1.7194344E12, 36984.86666666667], [1.7194338E12, 41350.03333333333], [1.7194341E12, 36826.13333333333], [1.719435E12, 37143.6], [1.7194347E12, 36905.5], [1.7194353E12, 36984.86666666667], [1.71943428E12, 36984.86666666667], [1.71943398E12, 36905.5], [1.71943488E12, 36508.666666666664], [1.71943458E12, 36826.13333333333], [1.71943386E12, 37381.7], [1.71943548E12, 37064.23333333333], [1.71943518E12, 36984.86666666667], [1.71943416E12, 35476.9], [1.71943476E12, 36667.4], [1.71943446E12, 36588.03333333333], [1.71943536E12, 36826.13333333333], [1.71943506E12, 36984.86666666667], [1.71943404E12, 37064.23333333333], [1.71943464E12, 36905.5], [1.71943434E12, 36826.13333333333], [1.71943524E12, 36905.5], [1.71943392E12, 36826.13333333333], [1.71943494E12, 37064.23333333333], [1.71943554E12, 35397.53333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.71943452E12, 1026.1666666666667], [1.71943422E12, 1058.9166666666667], [1.71943512E12, 1013.0666666666667], [1.71943482E12, 1023.9833333333333], [1.71943542E12, 1015.25], [1.7194344E12, 1017.4333333333333], [1.7194338E12, 1137.5166666666667], [1.7194341E12, 1013.0666666666667], [1.719435E12, 1021.8], [1.7194347E12, 1015.25], [1.7194353E12, 1017.4333333333333], [1.71943428E12, 1017.4333333333333], [1.71943398E12, 1015.25], [1.71943488E12, 1004.3333333333334], [1.71943458E12, 1013.0666666666667], [1.71943386E12, 1028.35], [1.71943548E12, 1019.6166666666667], [1.71943518E12, 1017.4333333333333], [1.71943416E12, 975.95], [1.71943476E12, 1008.7], [1.71943446E12, 1006.5166666666667], [1.71943536E12, 1013.0666666666667], [1.71943506E12, 1017.4333333333333], [1.71943404E12, 1019.6166666666667], [1.71943464E12, 1015.25], [1.71943434E12, 1013.0666666666667], [1.71943524E12, 1015.25], [1.71943392E12, 1013.0666666666667], [1.71943494E12, 1019.6166666666667], [1.71943554E12, 973.7666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71943554E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 678.5600858369094, "minX": 1.7194338E12, "maxY": 1379.533589251439, "series": [{"data": [[1.71943452E12, 690.5255319148931], [1.71943422E12, 680.1298969072175], [1.71943512E12, 690.8038793103455], [1.71943482E12, 781.2921108742008], [1.71943542E12, 694.6623655913976], [1.7194344E12, 678.5600858369094], [1.7194338E12, 1379.533589251439], [1.7194341E12, 698.7952586206895], [1.719435E12, 693.1239316239314], [1.7194347E12, 692.7655913978496], [1.7194353E12, 682.3969957081547], [1.71943428E12, 686.2918454935622], [1.71943398E12, 696.6258064516126], [1.71943488E12, 690.7347826086958], [1.71943458E12, 679.3426724137929], [1.71943386E12, 700.5414012738855], [1.71943548E12, 680.2291220556745], [1.71943518E12, 693.2317596566522], [1.71943416E12, 682.1409395973151], [1.71943476E12, 680.0238095238103], [1.71943446E12, 701.6659436008676], [1.71943536E12, 694.9418103448276], [1.71943506E12, 698.0858369098713], [1.71943404E12, 685.8008565310489], [1.71943464E12, 689.2602150537635], [1.71943434E12, 700.7090517241371], [1.71943524E12, 699.9548387096775], [1.71943392E12, 699.3728448275862], [1.71943494E12, 687.3832976445392], [1.71943554E12, 705.2780269058302]], "isOverall": false, "label": "book api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71943554E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 678.5343347639483, "minX": 1.7194338E12, "maxY": 1359.6871401151611, "series": [{"data": [[1.71943452E12, 690.5148936170206], [1.71943422E12, 680.0886597938143], [1.71943512E12, 690.7974137931036], [1.71943482E12, 781.262260127932], [1.71943542E12, 694.6408602150539], [1.7194344E12, 678.5343347639483], [1.7194338E12, 1359.6871401151611], [1.7194341E12, 698.7672413793105], [1.719435E12, 693.1217948717951], [1.7194347E12, 692.733333333333], [1.7194353E12, 682.3776824034334], [1.71943428E12, 686.2381974248931], [1.71943398E12, 696.5720430107524], [1.71943488E12, 690.719565217391], [1.71943458E12, 679.3211206896557], [1.71943386E12, 700.505307855626], [1.71943548E12, 680.2184154175587], [1.71943518E12, 693.2210300429183], [1.71943416E12, 682.1029082774047], [1.71943476E12, 680.002164502164], [1.71943446E12, 701.6529284164858], [1.71943536E12, 694.9353448275862], [1.71943506E12, 698.0686695278978], [1.71943404E12, 685.758029978587], [1.71943464E12, 689.2408602150545], [1.71943434E12, 700.6939655172406], [1.71943524E12, 699.9462365591392], [1.71943392E12, 699.3038793103448], [1.71943494E12, 687.3704496788006], [1.71943554E12, 705.2533632286999]], "isOverall": false, "label": "book api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71943554E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 454.6030042918453, "minX": 1.7194338E12, "maxY": 1102.9059500959688, "series": [{"data": [[1.71943452E12, 463.23829787234064], [1.71943422E12, 455.3195876288658], [1.71943512E12, 461.75000000000017], [1.71943482E12, 467.85714285714243], [1.71943542E12, 464.57849462365624], [1.7194344E12, 454.6030042918453], [1.7194338E12, 1102.9059500959688], [1.7194341E12, 468.5538793103451], [1.719435E12, 464.18803418803475], [1.7194347E12, 464.47526881720466], [1.7194353E12, 456.892703862661], [1.71943428E12, 458.69313304721027], [1.71943398E12, 465.31182795698913], [1.71943488E12, 461.645652173913], [1.71943458E12, 454.6357758620686], [1.71943386E12, 469.15498938428857], [1.71943548E12, 456.4239828693792], [1.71943518E12, 464.2660944206007], [1.71943416E12, 456.5592841163314], [1.71943476E12, 454.9653679653677], [1.71943446E12, 471.1258134490239], [1.71943536E12, 466.32974137931024], [1.71943506E12, 467.0751072961371], [1.71943404E12, 458.8843683083511], [1.71943464E12, 461.88602150537616], [1.71943434E12, 469.6487068965522], [1.71943524E12, 470.556989247312], [1.71943392E12, 463.0668103448277], [1.71943494E12, 458.24625267665937], [1.71943554E12, 473.06278026905835]], "isOverall": false, "label": "book api", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71943554E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 500.0, "minX": 1.7194338E12, "maxY": 9345.0, "series": [{"data": [[1.71943452E12, 936.0], [1.71943422E12, 826.0], [1.71943512E12, 1730.0], [1.71943482E12, 2757.0], [1.71943542E12, 1091.0], [1.7194344E12, 1141.0], [1.7194338E12, 9345.0], [1.7194341E12, 1059.0], [1.719435E12, 983.0], [1.7194347E12, 1798.0], [1.7194353E12, 894.0], [1.71943428E12, 1004.0], [1.71943398E12, 1091.0], [1.71943488E12, 1072.0], [1.71943458E12, 838.0], [1.71943386E12, 971.0], [1.71943548E12, 1080.0], [1.71943518E12, 1751.0], [1.71943416E12, 920.0], [1.71943476E12, 934.0], [1.71943446E12, 1831.0], [1.71943536E12, 950.0], [1.71943506E12, 1451.0], [1.71943404E12, 900.0], [1.71943464E12, 914.0], [1.71943434E12, 1076.0], [1.71943524E12, 1747.0], [1.71943392E12, 1091.0], [1.71943494E12, 2114.0], [1.71943554E12, 1105.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.71943452E12, 817.6000000000001], [1.71943422E12, 781.0], [1.71943512E12, 786.5], [1.71943482E12, 872.0], [1.71943542E12, 807.0], [1.7194344E12, 777.3], [1.7194338E12, 3565.4000000000033], [1.7194341E12, 826.0], [1.719435E12, 822.0], [1.7194347E12, 795.0], [1.7194353E12, 782.3], [1.71943428E12, 786.3], [1.71943398E12, 802.4000000000001], [1.71943488E12, 784.9000000000001], [1.71943458E12, 779.0], [1.71943386E12, 820.0], [1.71943548E12, 783.0], [1.71943518E12, 793.9000000000001], [1.71943416E12, 780.0], [1.71943476E12, 783.0], [1.71943446E12, 808.0], [1.71943536E12, 804.0], [1.71943506E12, 799.3], [1.71943404E12, 787.2], [1.71943464E12, 793.8000000000001], [1.71943434E12, 825.5], [1.71943524E12, 824.0], [1.71943392E12, 798.5], [1.71943494E12, 788.0], [1.71943554E12, 844.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.71943452E12, 901.8700000000001], [1.71943422E12, 800.14], [1.71943512E12, 951.5500000000021], [1.71943482E12, 2531.1000000000004], [1.71943542E12, 874.0799999999997], [1.7194344E12, 845.6499999999999], [1.7194338E12, 9016.539999999999], [1.7194341E12, 941.6500000000004], [1.719435E12, 942.79], [1.7194347E12, 904.0599999999997], [1.7194353E12, 808.3299999999999], [1.71943428E12, 918.31], [1.71943398E12, 976.0599999999997], [1.71943488E12, 946.9399999999994], [1.71943458E12, 800.35], [1.71943386E12, 944.56], [1.71943548E12, 842.1599999999999], [1.71943518E12, 883.2999999999998], [1.71943416E12, 884.6799999999998], [1.71943476E12, 849.74], [1.71943446E12, 993.52], [1.71943536E12, 917.4500000000002], [1.71943506E12, 1223.98], [1.71943404E12, 849.28], [1.71943464E12, 889.3999999999997], [1.71943434E12, 1011.9000000000003], [1.71943524E12, 929.02], [1.71943392E12, 972.2500000000003], [1.71943494E12, 875.6399999999999], [1.71943554E12, 990.3599999999997]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.71943452E12, 845.8], [1.71943422E12, 787.0], [1.71943512E12, 801.5], [1.71943482E12, 1588.0], [1.71943542E12, 838.7], [1.7194344E12, 786.0], [1.7194338E12, 6758.499999999998], [1.7194341E12, 857.5], [1.719435E12, 846.55], [1.7194347E12, 835.7], [1.7194353E12, 790.65], [1.71943428E12, 843.65], [1.71943398E12, 843.7], [1.71943488E12, 808.95], [1.71943458E12, 786.0], [1.71943386E12, 853.5999999999999], [1.71943548E12, 789.5999999999999], [1.71943518E12, 826.9499999999999], [1.71943416E12, 786.5999999999999], [1.71943476E12, 796.0], [1.71943446E12, 848.9], [1.71943536E12, 832.0], [1.71943506E12, 839.65], [1.71943404E12, 798.0], [1.71943464E12, 829.7], [1.71943434E12, 863.5], [1.71943524E12, 848.7], [1.71943392E12, 849.5], [1.71943494E12, 798.0], [1.71943554E12, 904.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.71943452E12, 505.0], [1.71943422E12, 500.0], [1.71943512E12, 512.0], [1.71943482E12, 513.0], [1.71943542E12, 509.0], [1.7194344E12, 503.0], [1.7194338E12, 516.0], [1.7194341E12, 510.0], [1.719435E12, 510.0], [1.7194347E12, 509.0], [1.7194353E12, 510.0], [1.71943428E12, 505.0], [1.71943398E12, 516.0], [1.71943488E12, 508.0], [1.71943458E12, 501.0], [1.71943386E12, 516.0], [1.71943548E12, 508.0], [1.71943518E12, 509.0], [1.71943416E12, 505.0], [1.71943476E12, 511.0], [1.71943446E12, 510.0], [1.71943536E12, 506.0], [1.71943506E12, 501.0], [1.71943404E12, 507.0], [1.71943464E12, 506.0], [1.71943434E12, 505.0], [1.71943524E12, 508.0], [1.71943392E12, 508.0], [1.71943494E12, 513.0], [1.71943554E12, 507.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.71943452E12, 756.0], [1.71943422E12, 757.0], [1.71943512E12, 756.0], [1.71943482E12, 763.0], [1.71943542E12, 761.0], [1.7194344E12, 753.0], [1.7194338E12, 774.0], [1.7194341E12, 758.0], [1.719435E12, 756.0], [1.7194347E12, 754.0], [1.7194353E12, 756.0], [1.71943428E12, 755.0], [1.71943398E12, 757.0], [1.71943488E12, 756.0], [1.71943458E12, 755.0], [1.71943386E12, 762.0], [1.71943548E12, 755.0], [1.71943518E12, 755.0], [1.71943416E12, 755.0], [1.71943476E12, 754.0], [1.71943446E12, 758.0], [1.71943536E12, 759.0], [1.71943506E12, 756.0], [1.71943404E12, 758.0], [1.71943464E12, 756.0], [1.71943434E12, 758.0], [1.71943524E12, 758.0], [1.71943392E12, 757.5], [1.71943494E12, 755.0], [1.71943554E12, 756.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71943554E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 723.0, "minX": 1.0, "maxY": 5325.0, "series": [{"data": [[8.0, 757.0], [2.0, 1365.5], [9.0, 755.0], [10.0, 753.0], [11.0, 723.0], [12.0, 892.5], [3.0, 748.0], [14.0, 773.0], [15.0, 752.0], [4.0, 766.5], [1.0, 747.0], [17.0, 1793.0], [75.0, 5325.0], [5.0, 755.0], [6.0, 758.0], [7.0, 757.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 722.0, "minX": 1.0, "maxY": 4995.0, "series": [{"data": [[8.0, 757.0], [2.0, 1365.5], [9.0, 755.0], [10.0, 753.0], [11.0, 722.0], [12.0, 892.5], [3.0, 748.0], [14.0, 773.0], [15.0, 752.0], [4.0, 766.5], [1.0, 747.0], [17.0, 1793.0], [75.0, 4995.0], [5.0, 755.0], [6.0, 758.0], [7.0, 757.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 75.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.71943374E12, "maxY": 8.066666666666666, "series": [{"data": [[1.71943452E12, 7.866666666666666], [1.71943422E12, 8.066666666666666], [1.71943512E12, 7.75], [1.71943482E12, 7.85], [1.71943542E12, 7.75], [1.7194344E12, 7.766666666666667], [1.7194338E12, 7.783333333333333], [1.7194341E12, 7.733333333333333], [1.719435E12, 7.8], [1.7194347E12, 7.783333333333333], [1.7194353E12, 7.75], [1.71943428E12, 7.766666666666667], [1.71943398E12, 7.733333333333333], [1.71943488E12, 7.65], [1.71943458E12, 7.75], [1.71943386E12, 7.833333333333333], [1.71943548E12, 7.75], [1.71943518E12, 7.75], [1.71943416E12, 7.466666666666667], [1.71943476E12, 7.683333333333334], [1.71943446E12, 7.65], [1.71943536E12, 7.75], [1.71943506E12, 7.766666666666667], [1.71943404E12, 7.783333333333333], [1.71943374E12, 1.0], [1.71943464E12, 7.7], [1.71943434E12, 7.733333333333333], [1.71943524E12, 7.766666666666667], [1.71943392E12, 7.75], [1.71943494E12, 7.783333333333333], [1.71943554E12, 7.366666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71943554E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 7.433333333333334, "minX": 1.7194338E12, "maxY": 8.683333333333334, "series": [{"data": [[1.71943452E12, 7.833333333333333], [1.71943422E12, 8.083333333333334], [1.71943512E12, 7.733333333333333], [1.71943482E12, 7.816666666666666], [1.71943542E12, 7.75], [1.7194344E12, 7.766666666666667], [1.7194338E12, 8.683333333333334], [1.7194341E12, 7.733333333333333], [1.719435E12, 7.8], [1.7194347E12, 7.75], [1.7194353E12, 7.766666666666667], [1.71943428E12, 7.766666666666667], [1.71943398E12, 7.75], [1.71943488E12, 7.666666666666667], [1.71943458E12, 7.733333333333333], [1.71943386E12, 7.85], [1.71943548E12, 7.783333333333333], [1.71943518E12, 7.766666666666667], [1.71943416E12, 7.45], [1.71943476E12, 7.7], [1.71943446E12, 7.683333333333334], [1.71943536E12, 7.733333333333333], [1.71943506E12, 7.766666666666667], [1.71943404E12, 7.783333333333333], [1.71943464E12, 7.75], [1.71943434E12, 7.733333333333333], [1.71943524E12, 7.75], [1.71943392E12, 7.733333333333333], [1.71943494E12, 7.783333333333333], [1.71943554E12, 7.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.71943554E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 7.433333333333334, "minX": 1.7194338E12, "maxY": 8.683333333333334, "series": [{"data": [[1.71943452E12, 7.833333333333333], [1.71943422E12, 8.083333333333334], [1.71943512E12, 7.733333333333333], [1.71943482E12, 7.816666666666666], [1.71943542E12, 7.75], [1.7194344E12, 7.766666666666667], [1.7194338E12, 8.683333333333334], [1.7194341E12, 7.733333333333333], [1.719435E12, 7.8], [1.7194347E12, 7.75], [1.7194353E12, 7.766666666666667], [1.71943428E12, 7.766666666666667], [1.71943398E12, 7.75], [1.71943488E12, 7.666666666666667], [1.71943458E12, 7.733333333333333], [1.71943386E12, 7.85], [1.71943548E12, 7.783333333333333], [1.71943518E12, 7.766666666666667], [1.71943416E12, 7.45], [1.71943476E12, 7.7], [1.71943446E12, 7.683333333333334], [1.71943536E12, 7.733333333333333], [1.71943506E12, 7.766666666666667], [1.71943404E12, 7.783333333333333], [1.71943464E12, 7.75], [1.71943434E12, 7.733333333333333], [1.71943524E12, 7.75], [1.71943392E12, 7.733333333333333], [1.71943494E12, 7.783333333333333], [1.71943554E12, 7.433333333333334]], "isOverall": false, "label": "book api-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71943554E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 7.433333333333334, "minX": 1.7194338E12, "maxY": 8.683333333333334, "series": [{"data": [[1.71943452E12, 7.833333333333333], [1.71943422E12, 8.083333333333334], [1.71943512E12, 7.733333333333333], [1.71943482E12, 7.816666666666666], [1.71943542E12, 7.75], [1.7194344E12, 7.766666666666667], [1.7194338E12, 8.683333333333334], [1.7194341E12, 7.733333333333333], [1.719435E12, 7.8], [1.7194347E12, 7.75], [1.7194353E12, 7.766666666666667], [1.71943428E12, 7.766666666666667], [1.71943398E12, 7.75], [1.71943488E12, 7.666666666666667], [1.71943458E12, 7.733333333333333], [1.71943386E12, 7.85], [1.71943548E12, 7.783333333333333], [1.71943518E12, 7.766666666666667], [1.71943416E12, 7.45], [1.71943476E12, 7.7], [1.71943446E12, 7.683333333333334], [1.71943536E12, 7.733333333333333], [1.71943506E12, 7.766666666666667], [1.71943404E12, 7.783333333333333], [1.71943464E12, 7.75], [1.71943434E12, 7.733333333333333], [1.71943524E12, 7.75], [1.71943392E12, 7.733333333333333], [1.71943494E12, 7.783333333333333], [1.71943554E12, 7.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.71943554E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 32400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

