$(document).ready(function () {
    var envelope = $("#envelope");
    var letter = $(".letter");
    var flap = $(".flap");
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var body = $("body");

    btn_open.click(function () {
        openEnvelope();
    });

    btn_reset.click(function () {
        closeEnvelope();
    });

    function openEnvelope() {
        var envelopeHeight = envelope.outerHeight();
        var letterHeight = letter.outerHeight();
        var moveDistance = letterHeight + 50;

        // Push the page and envelope down, reveal letter
        body.css({
            transform: `translateY(${moveDistance}px)`,
            transition: "transform 0.6s ease-out",
        });

        envelope.css({
            transform: `translateY(${moveDistance}px)`,
            transition: "transform 0.6s ease-out",
        });

        letter.css({
            transform: `translateY(-${moveDistance}px)`,
            transition: "transform 0.6s ease-out",
            opacity: "1",
        });

        flap.css({
            transform: "rotateX(180deg)",
            transition: "transform 0.6s ease-out",
        });
    }

    function closeEnvelope() {
        // Move letter down first into the envelope
        letter.css({
            transform: "translateY(0)",
            transition: "transform 0.6s ease-in",
            opacity: "0",
        });

        setTimeout(() => {
            // Close the envelope flap
            flap.css({
                transform: "rotateX(0deg)",
                transition: "transform 0.6s ease-in",
            });

            // Reset envelope and page position after flap closes
            envelope.css({
                transform: "translateY(0)",
                transition: "transform 0.6s ease-in",
            });

            body.css({
                transform: "translateY(0)",
                transition: "transform 0.6s ease-in",
            });
        }, 600);
    }
});
