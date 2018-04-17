Session.set("rando", false);
Session.set("chrando", false);
Session.set("prando", false);
Session.set('itemsLimit', 8);
Session.set('itemsLimitOld', 8)
Session.set('itemsPostLimit', 8);
Session.set('itemsPostLimitOld', 8)
Deps.autorun(function () {
    Meteor.subscribe("our", {
        onReady: function () {
            Session.set("active", true);
        }
    });
});

Deps.autorun(function () {
    Meteor.subscribe("all", {
        onReady: function () {
            Session.set("active", true);
        }
    });
});

Deps.autorun(function () {
    Meteor.subscribe("scene", {
        onReady: function () {
            Session.set("active", true);
        }
    });
});

Deps.autorun(function () {
    Meteor.subscribe("bandsample", {
        onReady: function () {
            Session.set("active", true);
        }
    });
});

Deps.autorun(function () {
    Meteor.subscribe("bandlogo", {
        onReady: function () {
            Session.set("active", true);
        }
    });
});

// Deps.autorun(function () {
//     Meteor.subscribe("backgroundfuck", {
//         onReady: function () {
//             Session.set("active", true);
//         }
//     });
// });

Deps.autorun(function () {
    Meteor.subscribe("backgroundlogo", {
        onReady: function () {
            Session.set("active", true);
        }
    });
});

Deps.autorun(function () {
    Meteor.subscribe("release", {
        onReady: function () {
            Session.set("active", true);
        }
    });
});

Deps.autorun(function () {
    Meteor.subscribe("releaselogo", {
        onReady: function () {
            Session.set("active", true);
        }
    });
});

// главная страница
Router.route('/', function () {
    this.render('bassfunk');
});


Template.all_items.helpers({
    all_item: function () {
        if (Session.get("active") && Session.get("rando") == false) {
            return All.find({}, { sort: { sort: 1 } });
        } else if (Session.get("active") && Session.get("rando") == true) {
            return _.shuffle(All.find().fetch());
        } else {
            return [];
        }
    }
});

// Template.backgroundfuck.helpers({
//     bckd: function () {
//         if (Session.get("active")) {
//             return Backgroundfuck.find({}, { limit: 1, sort: { uploadedAt: -1 } });
//         } else {
//             return [];
//         }
//     }
// });

//Кликаем на иконке и размещаем инфу

var menu_artist;
var sound = 1;
var mySound = null;
var bh = $('body').height();
var bw = $('body').width();

Template.bassfunk.events({
    "click .logo": function () {
       
        Session.set("artist", this);
        artname = Session.get("artist").name;
        need = Session.get(this.sound);
        if (mySound == null) {
            mySound = loadSound(need, function () {
                mySound.play(),
                    analyzer.setInput(mySound)
            })
        } else {
            mySound.stop();
            mySound = loadSound(need, function () {
                mySound.play(),
                    analyzer.setInput(mySound)
            });
        }
        $(".links" + "." + menu_artist).hide();
        $(".logo" + "." + menu_artist).show();
        menu_artist = this._id;
        $(".logo" + "." + menu_artist).hide();
        $(".links" + "." + menu_artist).show();
    },
    "click .bassimg": function () {
        mySound.stop();
        $("body").css("-webkit-filter", "none");
        $("body").css("filter", "none");
        $("html").css("background", "black");
        $(".fbut").css("-webkit-filter", "none");
        $(".fbut").css("filter", "none");
    },
    "click .soundoff": function () {
        masterVolume(0);
        sound = 0;
        if (mySound != null) {
            mySound.stop();
        }
        $(".soundoff").hide();
        $(".soundon").show();
        $("body").css("-webkit-filter", "invert(100%)");
        $("body").css("filter", "invert(100%)");
        $("html").css("background", "white");
        $("video").css("opacity", "0");
        $(".fbut").css("-webkit-filter", "none");
        $(".fbut").css("filter", "none");
    },
    "click .soundon": function () {
        if (mySound != null) {
            mySound.stop();
        }
        masterVolume(1);
        sound = 1;
        $(".soundon").hide();
        $(".soundoff").show();
        $("body").css("-webkit-filter", "none");
        $("body").css("filter", "none");
        $("html").css("background", "black");
        $(".fbut").css("-webkit-filter", "none");
        $(".fbut").css("filter", "none");
        $("video").css("opacity", "1");
        
    },
    "click .randoff": function () {
        $(".all").fadeOut(100, function () { Session.set("rando", false); });
        $(".randoff").hide();
        $(".randoff").hide();
        $(".randon").show();
        $(".all").fadeIn();
    },
    "click .randon": function () {
        $(".all").fadeOut(100, function () { Session.set("rando", true); });
        $(".randon").hide();
        $(".randoff").show();
        $(".all").fadeIn();
    },
    "click .zoomoff": function () {
        // $(".all").fadeOut(100, function () { Session.set("rando", false); });
        $(".zoomoff").hide();
        $(".zoomon").show();
        $(".item").css({
            'width': '350px',
            'margin': '1%!important',
            'height': '350px'
        });
        $(".emptysocial, .issocial").css({
            'width': '73px',
            'border': '5px solid white',
            'height': '73px'
        });
    },
    "click .zoomon": function () {
        // $(".all").fadeOut(100, function () { Session.set("rando", true); });
        $(".zoomoff").show();
        $(".zoomon").hide();
        
        $(".item").css({
            'width': '150px',
            'margin': '-5%!important',
            'height': '150px'
        });
        
        $(".emptysocial, .issocial").css({
            'width': '33px',
            'border': '3px solid white',
            'height': '33px'
        });
    },
    "mouseenter .bassimg": function () {
    },
    "mouseleave .bassimg": function () {
        $('.wrapper').css('background', '#000');
    },
    "click .delete": function () {
        $(".delete" + "." + this._id).hide();
        $(".sure" + "." + this._id).show();
    },
    "click .sure": function () {
        All.remove(this._id);
    }
});
Template.chatfuck.events({
    "click .delete": function () {
        $(".delete" + "." + this._id).hide();
        $(".sure" + "." + this._id).show();
    },
    "click .sure": function () {
        Messages.remove(this._id);
    },
    "click .chrandoff": function () {
        Session.set("chrando", false);
        $(".chrandoff").hide();
        $(".chrandon").show();

    },
    "click .chrandon": function () {
        Session.set("chrando", true);
        $(".chrandon").hide();
        $(".chrandoff").show();

    },
    "click .loading__wrapper": function () {
        var ITEMS_INCREMENT = 8;
        Session.setDefault('itemsLimit', ITEMS_INCREMENT);
        Deps.autorun(function () {
            Meteor.subscribe('messages', Session.get('itemsLimit'));
        });
        Session.set("itemsLimitOld", Session.get("itemsLimit"));
        Session.set("itemsLimit",
            Session.get("itemsLimit") + ITEMS_INCREMENT);
        
    }
});
Template.blog.events({
    "mouseenter .bassimg": function () {
        $('.container-fluid').css('background-size', '4px 4px');
    },
    "mouseleave .bassimg": function () {
        $('.container-fluid').css('background', '#000');
    },
    "click .delete": function () {
        $(".delete" + "." + this._id).hide();
        $(".sure" + "." + this._id).show();
    },
    "click .sure": function () {
        Posts.remove(this._id);
    },
    "click .chrandoff": function () {
        Session.set("prando", false);
        $(".chrandoff").hide();
        $(".chrandon").show();

    },
    "click .chrandon": function () {
        Session.set("prando", true);
        $(".chrandon").hide();
        $(".chrandoff").show();

    }
});

Template.plums.events({
    "mouseenter .bassimg": function () {
        $('.wrapper').css('background-size', '4px 4px');
    },
    "mouseleave .bassimg": function () {
        $('.wrapper').css('background', '#000');
    }
})

// Релизы
Router.route('/past', function () {
    this.render('plums');
});

Template.plums.helpers({
    release_item: function () {
        if (Session.get("active")) {
            return Release.find({}, { sort: { sort: 1 } });
        } else {
            return [];
        }
    }
});


// admin
Router.route('/login', function () {
    this.render('login');
});

Router.route('/stream', function () {
    this.render('chatfuck');
});

Template.messages_block.helpers({
    message: function () {
        if (Session.get("chrando") == false) {
            return Messages.find({}, { sort: { createdAt:-1,sort:1} }); 
            // return Messages.find({}).sort({createdAt:-1,sort:-1});
        } else if (Session.get("chrando") == true) {
            Meteor.subscribe('rand');
            return _.first(_.shuffle(Rand.find().fetch()), Session.get('itemsLimit'));
        }
    },
    moreResults: function () {
        // If, once the subscription is ready, we have less rows than we
        // asked for, we've got all the rows in the collection.
        if (Session.get("chrando") == false) {
            return !(Messages.find().count() < Session.get("itemsLimit"));
        } else if (Session.get("chrando") == true) {
            return _.first(_.shuffle(Rand.find().fetch()), Session.get('itemsLimitOld'));
        } else {
            return [];
        }
    }
});

var ITEMS_INCREMENT = 8;
Session.setDefault('itemsLimit', ITEMS_INCREMENT);
Deps.autorun(function () {
    Meteor.subscribe('messages', Session.get('itemsLimit'));
});

function showMoreVisible() {
    var threshold; 
    var target;
    target = $("-.loading__wrapper");
    if (!target.length) return;
    threshold = $(window).scrollTop() + $(window).height() - target.height();
    if (target.offset().top <= threshold) {

        if (!target.data("visible")) {
            // console.log("target became visible (inside viewable area)");
            target.data("visible", true);
            Session.set("itemsLimitOld", Session.get("itemsLimit"));
            Session.set("itemsLimit",
                Session.get("itemsLimit") + ITEMS_INCREMENT);
         
        }
    } else {
        if (target.data("visible")) {
            // console.log("target became invisible (below viewable arae)");
            target.data("visible", false);
        }
    }
}

$(window).scroll(showMoreVisible);

//blog
Router.route('/all', function () {
    this.render('blog');
});

Template.blog_messages_block.helpers({
    blog_message: function () {
        if (Session.get("prando") == false) {
            return Posts.find({}, { sort: { createdAt:-1, sort:1} }).fetch();
            console.log("NOW WE NEED POSTS")
        } else if (Session.get("prando") == true) {
            Meteor.subscribe('randpo');
            return _.first(_.shuffle(Randpo.find().fetch()), Session.get('itemsPostLimit'));
        }
    },
    moreResults: function () {
        // If, once the subscription is ready, we have less rows than we
        // asked for, we've got all the rows in the collection.
        if (Session.get("prando") == false) {
            return !(Posts.find().count() < Session.get("itemsLimit"));
        } else if (Session.get("prando") == true) {
            return _.first(_.shuffle(Randpo.find().fetch()), Session.get('itemsPostLimitOld'));
        } else {
            return [];
        }
    }
})

var ITEMS_INCREMENT = 8;
Session.setDefault('itemsPostLimit', ITEMS_INCREMENT);
Deps.autorun(function () {
    Meteor.subscribe('posts', Session.get('itemsPostLimit'));
});

function showMoreBlogVisible() {
    var threshold, target = $("#showMoreBlogResults");
    if (!target.length) return;
    threshold = $(window).scrollTop() + $(window).height() - target.height();
    if (target.offset().top <= threshold) {

        if (!target.data("visible")) {
            // console.log("target became visible (inside viewable area)");
            target.data("visible", true);
            Session.set("itemsPostLimitOld", Session.get("itemsPostLimit"));
            Session.set("itemsPostLimit",
                Session.get("itemsPostLimit") + ITEMS_INCREMENT);
        }
    } else {
        if (target.data("visible")) {
            target.data("visible", false);
        }
    }
}

// run the above func every time the user scrolls
$(window).scroll(showMoreBlogVisible);

Template.messages_block.rendered = function () {
    console.log('dafuq is this shit');
    console.log('%cWHEN %cYOU %cWATCH THE CONSOLE DEATH IS WATCHING %cYOU','font-size: 18px;font-family: "Arial Black", "Arial Bold", Gadget, sans-serif; font-style: italic','color:red;font-size: 18px;font-family: "Arial Black", "Arial Bold", Gadget, sans-serif; font-style: italic','font-size: 18px;font-family: "Arial Black", "Arial Bold", Gadget, sans-serif; font-style: italic','color:red;font-size: 18px;font-family: "Arial Black", "Arial Bold", Gadget, sans-serif; font-style: italic',);
    console.log('%c    ', cssbiz);
    $(".message").on('load', function() {
        console.log('YOUR LIFE IS USELESS');
    });    
}
var svgbiz = '<svg id="svgconsolelogo" xmlns="http://www.w3.org/2000/svg" viewBox="0 -150 581.65 881.82" > <defs> <style> #svgconsolelogo { animation: jerkbassfunk .1s ease-in-out infinite alternate; } .consolelogo { fill: red; stroke: blue; stroke-width: 1; stroke-dasharray: 100; stroke-dashoffset: 10; animation: dashbassfunk .1s ease-in-out infinite alternate; } .consolelogo2 { stroke-width: 2; stroke-dasharray: 2652; } @keyframes jerkbassfunk { 0% { margin-left: -1px; transform: translatey(0px); } 25% { margin-left: 0px; transform: translatey(-1px); } 50% { margin-left: 1px; transform: translatey(0px); } 75% { margin-left: 0px; transform: translatey(-1px); } 100% { margin-left: 0px; transform: translatey(0px); } } @keyframes dashbassfunk { 0% { stroke-dashoffset: 10; stroke-dasharray: 312; } 99.9%{ stroke-width: 0; stroke-dashoffset: 0; stroke-dasharray: 112; } 100% { filter: hue-rotate(110deg); } } </style> </defs> <title>basslogo</title> <path class="consolelogo consolelogo2" d="M304.41,95.74c160,.4,290.85,128.08,291.16,290.4C595.89,546.4,468,676.2,305.43,677.56,225.54,676.34,156.16,649,99.5,592.35S15.2,466.77,13.92,387C14.31,227.76,141.16,96.94,304.41,95.74Zm.93,27.87c-146.9.2-263.4,118.33-263.55,262.82A262.86,262.86,0,0,0,304.51,649.65c144.22.34,263.32-116.45,263.34-263S448.81,123.78,305.34,123.61Z" transform="translate(-13.92 -95.74)" /> <path class="consolelogo " d="M100.17,359.7h17.11v20.59a21.61,21.61,0,0,1,12.32-4.53,18,18,0,0,1,18.24,13.88,33.67,33.67,0,0,1-1,20.25c-5.22,14-21.57,14.45-28.67,7.2-.52-.53-1.15-1-2.06-1.7l-.34,4.88c-3,.7-11.84.75-15.58.08ZM131.79,399a53,53,0,0,0-.69-5.76c-.79-3.36-3.25-5.63-6-5.81a7.28,7.28,0,0,0-7.05,5.12,19.37,19.37,0,0,0,.2,13,6.8,6.8,0,0,0,6.61,4.53,6.39,6.39,0,0,0,5.86-4.91A56.13,56.13,0,0,0,131.79,399Z" transform="translate(-13.92 -95.74)" /> <path class="consolelogo" d="M500.35,359.63l-10.54,31.09c3.59-2.5,6.14-4.9,8.85-7.09s5.58-4.62,8.38-6.95H528l-20.9,15.4,6.88,28.35c-3.12.73-6.19.29-9.23.36s-6.21,0-9.61,0c-1.74-5.53-1.72-11.4-3.47-17.36l-8.12,5.88-3.95,11.37c-2.76,0-5.57.09-8.38.11s-5.68,0-9.05,0C469,400.18,476,380,482.86,359.63Z" transform="translate(-13.92 -95.74)" /> <path class="consolelogo" d="M187.54,391l-1.2-3.58c-5.82-3-10.56-1.67-14,3.92l-15.81-1.57c.9-6.26,4.24-10.2,9.75-12.15A28.77,28.77,0,0,1,174.6,376a78.46,78.46,0,0,1,16.28.56c8.09,1.38,12.68,6.25,13,14.46.16,4.27,0,8.55,0,12.83,0,2.46-.17,4.94.05,7.38.28,3.06.89,6.1,1.42,9.53-2.15.25-4.67.06-7.17.1s-5.18,0-8.07,0l-2.19-4.69c-.58.35-1.11.62-1.58,1-6.78,5.06-14.39,5.55-22.21,3.59-7.06-1.78-10.62-8.53-8.67-15.44a9.33,9.33,0,0,1,5.56-6.61,111.52,111.52,0,0,1,11.11-3.3c4.24-1.13,8.53-2.08,12.79-3.17A18.3,18.3,0,0,0,187.54,391Zm-.51,9.16c-3.36,1-6.48,1.82-9.57,2.77a13.61,13.61,0,0,0-3.19,1.38,4.13,4.13,0,0,0-2,4.31,3.61,3.61,0,0,0,2.87,3.3,11.15,11.15,0,0,0,4.18.32C185.31,411.13,187.75,407.38,187,400.12Z" transform="translate(-13.92 -95.74)" /> <path class="consolelogo" d="M362.51,376.81h16.92l-5.81,17.12c-.83,2.45-1.75,4.88-2.46,7.37-.52,1.83-1.3,3.73,0,5.77,1.68,1.69,3.72,1.71,6,.89a9.62,9.62,0,0,0,5.25-4.39,39.16,39.16,0,0,0,2.73-6c2.42-6.82,4.73-13.69,7.23-21,5.47,0,11,0,17.07,0l-15,44H378.69l1.64-6.16c-1.45,1-2.46,1.6-3.43,2.3a24.65,24.65,0,0,1-16.42,4.79c-6-.39-9.32-3.75-9-9.74a23.12,23.12,0,0,1,1.09-6.08c3-9.23,6.18-18.41,9.31-27.6A11.48,11.48,0,0,1,362.51,376.81Z" transform="translate(-13.92 -95.74)" /> <path class="consolelogo" d="M421.94,420.66H405.11c2.14-7.64,4.95-14.81,7.35-22.1s4.9-14.45,7.39-21.75h15.81l-1.8,6.1c1.5-1,2.52-1.55,3.47-2.24a24.6,24.6,0,0,1,16.39-4.86c6.2.37,9.48,3.82,9.13,10a22.55,22.55,0,0,1-1.06,5.7c-3.08,9.34-6.27,18.65-9.43,28a7.88,7.88,0,0,1-.62,1.13H434.91c1.17-3.52,2.25-6.81,3.36-10.08,1.57-4.66,3.21-9.3,4.72-14,.63-1.94,1.43-3.94.25-6.14-1.81-1.88-4-1.81-6.34-.9a9.76,9.76,0,0,0-5.14,4.53,42.86,42.86,0,0,0-2.67,6c-2,5.61-3.88,11.26-5.82,16.89C422.86,418.19,422.41,419.38,421.94,420.66Z" transform="translate(-13.92 -95.74)" /> <path class="consolelogo" d="M295.33,408.52a3.88,3.88,0,0,0-3.53-3.48c-3.55-.7-7.1-1.38-10.64-2.13a47.63,47.63,0,0,1-6.77-1.69c-5-1.87-8.24-5.3-8.62-10.88a11.77,11.77,0,0,1,7.36-12.1,24.54,24.54,0,0,1,7.81-2.15,59.9,59.9,0,0,1,15.88.38c6.19,1.16,10.21,4.65,12.54,10.87L293.73,389c-2.47-3.47-5.79-4.72-9.82-3.61-2.52.69-3,1.8-2.3,4.69,2,1.62,4.5,1.7,6.91,2.08,3.45.54,6.92,1,10.34,1.65a20.36,20.36,0,0,1,5.1,1.82c7.86,4,9.43,13.56,3.34,20a16.78,16.78,0,0,1-7.24,4.38,26,26,0,0,1-5.28,1.22c-6.59.65-13.18.81-19.67-1-5.87-1.62-9.61-5.34-11.29-11.71l16.68-1.69c1.75,3.85,4.55,5.86,8.65,5.51C291.76,412.13,294.33,411.62,295.33,408.52Z" transform="translate(-13.92 -95.74)" /> <path class="consolelogo" d="M211.26,408.53l16.61-1.65c.67,1.05,1.19,1.93,1.78,2.77,2.13,3,8.18,3.8,11.67,1.19,2.23-1.67,1.79-4.51-1-5.43a75.17,75.17,0,0,0-7.56-1.72c-3.78-.85-7.67-1.4-11.31-2.65a12.17,12.17,0,0,1-7.24-16.76c2.09-4.28,5.88-6.57,10.34-7.52a49.72,49.72,0,0,1,20.83-.05c5.62,1.19,9.26,4.81,11.37,10.64L241.12,389c-2.23-3.49-5.43-4.45-9.16-3.78-2.59.46-3.16,1.38-3.17,4.42,1.78,2.21,4.52,2.07,7,2.5,3.44.61,6.92.94,10.33,1.67a21.35,21.35,0,0,1,5.79,2.15c7.37,4.07,8.72,13.35,3,19.52a16,16,0,0,1-7.54,4.6,46.94,46.94,0,0,1-25.68-.15C216.29,418.42,213,414.6,211.26,408.53Z" transform="translate(-13.92 -95.74)" /> <path class="consolelogo" d="M326.83,389.11l-6.13-.34,4-12,6.26-.29c.92-2.14,1.8-4.26,2.74-6.37,3.43-7.7,9.48-11.42,17.81-11.36,4.5,0,9,.44,14.07.71-1.47,4.23-3.73,7.47-5.24,11.08-3.27,0-6.46-1.16-9.23,1-1.5,1.17-2.14,2.81-2.6,4.9l7.77.36-4.08,12.13h-8.05l-10.9,31.76H316.34C319.54,410,323.49,399.82,326.83,389.11Z" transform="translate(-13.92 -95.74)" /></svg>';
var cssbiz = 'background: url(\'data:image/svg+xml;utf8,' + svgbiz + '\') center no-repeat; font-size: 260px;';

Template.blog.rendered = function () {
    // $("#wow").hide();
    // $('canvas').hide();
    console.log('%cWHEN %cYOU %cWATCH THE CONSOLE DEATH IS WATCHING %cYOU','font-size: 18px;font-family: "Arial Black", "Arial Bold", Gadget, sans-serif; font-style: italic','color:red;font-size: 18px;font-family: "Arial Black", "Arial Bold", Gadget, sans-serif; font-style: italic','font-size: 18px;font-family: "Arial Black", "Arial Bold", Gadget, sans-serif; font-style: italic','color:red;font-size: 18px;font-family: "Arial Black", "Arial Bold", Gadget, sans-serif; font-style: italic',);
    console.log('%c    ', cssbiz);
}

// создаем сообщение в чат

Template.form_block.events({
    "submit .new_message": function (event) {
        var text = event.target.text.value;
        var new_mes = Messages.insert({
            text: text,
            author: "AKIRA", //lol
            sort: 1
        });
        event.target.text.value = "";
        return false;
    }
});

Template.blog_form_block.events({
    "submit .new_message": function (event) {
        console.log("DEATH WILL FOLLOW YOU")
        var text = event.target.text.value;
        var new_mes = Posts.insert({
            text: text,
            sort: 1
        });
        event.target.text.value = "";
        return false;
    }
});

Accounts.config({
    forbidClientAccountCreation: true
});