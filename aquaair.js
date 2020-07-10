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
var modo1 = "30 8 * * 1-4"
var modox1 = "Eingeschaltet bis 8:40Uhr"
var modoy1 = "Ausgeschaltet bis 9:30Uhr"

//Ausschalten
var modo2 = "30 9 * * 1-4"
var modox2 = "Eingeschaltet bis 9:40Uhr"
var modoy2 = "Ausgeschaltet bis 17:00Uhr"

//Einschalten
var modo3 = "0 17 * * 1-4"
var modox3 = "Eingeschaltet bis 17:10Uhr"
var modoy3 = "Ausgeschaltet bis 18:00Uhr"

// Ausschalten
var modo4 = "0 18 * * 1-4"
var modox4 = "Eingeschaltet bis 18:10Uhr"
var modoy4 = "Ausgeschaltet bis 8:30Uhr"

// Freitag

//Einschalten
var fr1 = "30 8 * * 5"
var frx1 = "Eingeschaltet bis 8:40Uhr"
var fry1 = "Ausgeschaltet bis 9:30Uhr"

//Ausschalten
var fr2 = "30 9 * * 5"
var frx2 = "Eingeschaltet bis 9:40Uhr"
var fry2 = "Ausgeschaltet bis 17:00Uhr"

//Einschalten
var fr3 = "0 17 * * 5"
var frx3 = "Eingeschaltet bis 17:10Uhr"
var fry3 = "Ausgeschaltet bis 18:00Uhr"

//Ausschalten
var fr4 = "0 18 * * 5"
var frx4 = "Eingeschaltet bis 18:10Uhr"
var fry4 = "Ausgeschaltet bis 10:30Uhr"

// Samstag

//Einschalten
var sa1 = "30 10 * * 6"
var sax1 = "Eingeschaltet bis 10:40Uhr"
var say1 = "Ausgeschaltet bis 11:30Uhr"

//Ausschalten
var sa2 = "30 11 * * 6"
var sax2 = "Eingeschaltet bis 11:40Uhr"
var say2 = "Ausgeschaltet bis 18:00Uhr"

//Einschalten
var sa3 = "00 18 * * 6"
var sax3 = "Eingeschaltet bis 18:10Uhr"
var say3 = "Ausgeschaltet bis 19:00Uhr"

//Ausschalten
var sa4 = "0 19 * * 6"
var sax4 = "Eingeschaltet bis 19:10Uhr"
var say4 = "Ausgeschaltet bis 10:30Uhr"


// Sonntag

//Einschalten
var so1 = "30 10 * * 0"
var sox1 = "Eingeschaltet bis 10:40Uhr"
var soy1 = "Ausgeschaltet bis 11:30Uhr"

//Ausschalten
var so2 = "30 11 * * 0"
var sox2 = "Eingeschaltet bis 11:40Uhr"
var soy2 = "Ausgeschaltet bis 18:00Uhr"

//Einschalten
var so3 = "0 18 * * 0"
var sox3 = "Eingeschaltet bis 18:10Uhr"
var soy3 = "Ausgeschaltet bis 19:00Uhr"

//Ausschalten
var so4 = "0 19 * * 0"
var sox4 = "Eingeschaltet bis 19:10Uhr"
var soy4 = "Ausgeschaltet bis 8:30Uhr"

// Benutzervariablen bis hier !!

var notfyoff = "Manuell Ausgeschaltet"
var notfyon = "Manuell Eingeschaltet"
var dp = "alias.0.Aquarium.Luft"
var ontime = 600000



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

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: modoy1,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
});

schedule(modo2, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: modox2
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: modoy2,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
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

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: modoy3,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
});

schedule(modo4, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: modox4
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: modoy4,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
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

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: fry1,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
});

schedule(fr2, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: frx2
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: fry2,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
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

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: fry3,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
});

schedule(fr4, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: frx4
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: fry4,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
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

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: say1,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
});

schedule(sa2, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: sax2
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: say2,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
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

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: say3,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
});

schedule(sa4, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: sax4
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: say4,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
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

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: soy1,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
});

schedule(so2, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: sox2
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: soy2,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
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

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: soy3,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
});

schedule(so4, function () {
    extendObject(dp, {
        common: {
            states: {
                false: notfyoff,
                true: sox4
            }
        }
    });
    var timeout = setTimeout(function () {
        setState(dp, true);
    }, 200);

    var timeout1 = setTimeout(function () {
        extendObject(dp, {
            common: {
                states: {
                    false: soy4,
                    true: notfyon
                }
            }
        });
        var timeout2 = setTimeout(function () {
            setState(dp, false);
        }, 200);

    }, ontime);
});

