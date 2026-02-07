// pricing.js - uses jQuery to calculate total cost
$(function () {
    // optional: keep display in sync if hourlyRate ever changes
    var $hours = $('#numHours');
    var $rate = $('#hourlyRate');
    var $rateDisplay = $('#hourlyRateDisplay');
    var $total = $('#totalCost');
    var $btn = $('#calculateTotal');

    // update visual rate display (uses numeric value from the input)
    function updateRateDisplay() {
        var r = parseFloat($rate.val()) || 0;
        $rateDisplay.text(r.toFixed(2));
    }
    updateRateDisplay();

    $btn.on('click', function () {
        // read raw input so we can detect empty/non-numeric entries properly
        var hoursRaw = ($hours.val() || '').toString().trim();
        var hours = parseFloat(hoursRaw);

        // validation: require a positive number (> 0)
        if (hoursRaw === '' || isNaN(hours) || hours <= 0) {
            alert('Please enter a positive number of hours.');
            $hours.focus();
            return;
        }

        var rate = parseFloat($rate.val()) || 0;
        var total = hours * rate;
        $total.val('$' + total.toFixed(2));
    });
});