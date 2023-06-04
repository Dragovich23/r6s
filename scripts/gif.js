d = new Date(); //skrypt wymusza przeladowanie źródla, zeby gif wlaczal sie po przeladowaniu strony (inaczej zostaje w cache)
$("#gif").attr("src", "./content/logo.gif?"+d.getTime()); 