$(document).ready(function() {
    $(".language-select").on("change", function() {
        if ($(this).val() == "일본어") {
            location.href = "/main/jp";
        }
        if ($(this).val() == "韓国語") {
            location.href = "/main";
        }
    });
});