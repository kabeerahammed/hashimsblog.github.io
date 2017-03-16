 $(document).ready(function() {
                $(".message").hide();
                $("span.readmore").click(function(){
                    $(".message").show("slow");
                    $(this).hide();
                });
				$("hide.close").click(function(){
 $(".message").hide("slow");
$(this).hide();
				});
            });// JavaScript Document
			 