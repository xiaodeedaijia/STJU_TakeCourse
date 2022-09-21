var timer = setInterval(function() {
    var form = document.getElementById("jhnkcQueryForm");
    var search = form.getElementsByClassName("zeromodal-btn zeromodal-btn-primary querybtn")[0];
    search.click();

    tbody = document.getElementById("zynkcGrid").getElementsByTagName("tbody")[0];
    if (tbody.getElementsByTagName("tr")[0].getElementsByTagName("td").length == 1) {
        
    } else {
        clearInterval(timer);
        var tr = tbody.getElementsByTagName("tr")[0];
        tr.getElementsByTagName("a")[1].click();
        document.getElementsByClassName("zeromodal-footer")[0].getElementsByTagName("button")[0].click();
        // document.getElementsByClassName("zeromodal-btn zeromodal-btn-primary")[1].click();
    }
}, 250)