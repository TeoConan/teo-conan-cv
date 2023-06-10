/***********************************************
 * WIDGET: CONTACT FORM
 ***********************************************/
(function ($) {
    "use strict";

    VLTJS.contactForm = {
        init: function () {
            // check if plugin defined
            if (typeof $.fn.validate == "undefined") {
                return;
            }
            var el = $(".vlt-contact-form");

            el.each(function () {
                var thisForm = $(this),
                    successMessage = thisForm.find(".message.success"),
                    errorMessage = thisForm.find(".message.danger");
                thisForm.validate({
                    errorClass: "error",
                    submitHandler: function (form) {
                        var formData = {
                            name: $("#name").val(),
                            email: $("#email").val(),
                            message: $("#message").val(),
                        };

                        window.open(
                            "https://devolution.studio/contact/?name=" +
                                formData.name +
                                "&email=" +
                                formData.email +
                                "&message=" +
                                formData.message,
                            "_blank"
                        );
                    },
                });
            });
        },
    };
    VLTJS.contactForm.init();
})(jQuery);
