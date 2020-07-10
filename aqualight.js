/*CRON Kurzanleitung:


# ┌───────────── Minute (0 - 59)
# │ ┌───────────── Stunde (0 - 23)
# │ │ ┌───────────── Tag im Monat (1 - 31)
# │ │ │ ┌───────────── Monat (1 - 12)
# │ │ │ │ ┌───────────── Wochentag (0 - 6) (Sonntag bis Samstag)
# │ │ │ │ │                                  
# │ │ │ │ │
# │ │ │ │ │
# * * * * *
*/

// Benutzervariablen ab hier !!

    // Montag - Donnerstag

        //Einschalten
        var modo1 = "30 6 * * 1-4"
        var modox1 = "Eingeschaltet bis 10:30Uhr"

        //Ausschalten
        var modo2 = "30 10 * * 1-4"
        var modox2 = "Ausgeschaltet bis 16:30Uhr"

        //Einschalten
        var modo3 = "30 16 * * 1-4"
        var modox3 = "Eingeschaltet bis 23:00Uhr"

        // Ausschalten
        var modo4 = "0 23 * * 1-4"
        var modox4 = "Ausgeschaltet bis 6:30Uhr"


    // Freitag

        //Einschalten
        var fr1 = "30 6 * * 5"
        var frx1 = "Eingeschaltet bis 10:30Uhr"

        //Ausschalten
        var fr2 = "30 10 * * 5"
        var frx2 = "Ausgeschaltet bis 16:30Uhr"

        //Einschalten
        var fr3 = "30 16 * * 5"
        var frx3 = "Eingeschaltet bis 23:00Uhr"

        //Ausschalten
        var fr4 = "0 23 * * 5"
        var frx4 = "Ausgeschaltet bis 6:30Uhr"


    // Samstag

        //Einschalten
        var sa1 = "0 9 * * 6"
        var sax1 = "Eingeschaltet bis 13:00Uhr"

        //Ausschalten
        var sa2 = "0 13 * * 6"
        var sax2 = "Ausgeschaltet bis 15:30Uhr"

        //Einschalten
        var sa3 = "30 15 * * 6"
        var sax3 = "Eingeschaltet bis 23:00Uhr"

        //Ausschalten
        var sa4 = "0 23 * * 6"
        var sax4 = "Ausgeschaltet bis 9:00Uhr"



    // Sonntag

        //Einschalten
        var so1 = "0 9 * * 0"
        var sox1 = "Eingeschaltet bis 13:00Uhr"

        //Ausschalten
        var so2 = "0 13 * * 0"
        var sox2 = "Ausgeschaltet bis 15:00Uhr"

        //Einschalten
        var so3 = "0 15 * * 0"
        var sox3 = "Eingeschaltet bis 22:30Uhr"

        //Ausschalten
        var so4 = "30 22 * * 0"
        var sox4 = "Ausgeschaltet bis 6:30Uhr"


// Benutzervariablen bis hier !!

var notfyoff = "Manuell Ausgeschaltet"
var notfyon = "Manuell Eingeschaltet"
var dp = "alias.0.Aquarium.Licht"

schedule(modo1, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: modox1
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);
});

schedule(modo2, function () {
    extendObject(dp, {
        common: {
            states: {
                false: modox2,
                true: notfyon
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, false);
    }, 200);
});

schedule(modo3, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: modox3
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);
});

schedule(modo4, function () {
    extendObject(dp, {
        common: {
            states: {
                false: modox4,
                true: notfyon
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, false);
    }, 200);
});

schedule(fr1, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: frx1
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);
});

schedule(fr2, function () {
    extendObject(dp, {
        common: {
            states: {
                false: frx2,
                true: notfyon
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, false);
    }, 200);
});

schedule(fr3, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: frx3
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);
});

schedule(fr4, function () {
    extendObject(dp, {
        common: {
            states: {
                false: frx4,
                true: notfyon
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, false);
    }, 200);
});

schedule(sa1, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: sax1
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);
});

schedule(sa2, function () {
    extendObject(dp, {
        common: {
            states: {
                false: sax2,
                true: notfyon
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, false);
    }, 200);
});

schedule(sa3, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: sax3
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);
});

schedule(sa4, function () {
    extendObject(dp, {
        common: {
            states: {
                false: sax4,
                true: notfyon
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, false);
    }, 200);
});

schedule(so1, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: sox1
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);
});

schedule(so2, function () {
    extendObject(dp, {
        common: {
            states: {
                false: sox2,
                true: notfyon
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, false);
    }, 200);
});

schedule(so3, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: sox3
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);
});

schedule(so4, function () {
    extendObject(dp, {
        common: {
            states: {
                false: sox4,
                true: notfyon
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, false);
    }, 200);
});