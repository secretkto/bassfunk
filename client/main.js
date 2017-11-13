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

Deps.autorun(function () {
    Meteor.subscribe("backgroundfuck", {
        onReady: function () {
            Session.set("active", true);
        }
    });
});

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

Template.backgroundfuck.helpers({
    bckd: function () {
        if (Session.get("active")) {
            return Backgroundfuck.find({}, { limit: 1, sort: { uploadedAt: -1 } });
        } else {
            return [];
        }
    }
});

//Кликаем на иконке и размещаем инфу

var menu_artist;
var sound = 1;
var mySound = null;
var bh = $('body').height();
var bw = $('body').width();

Template.bassfunk.events({
    "click .logo": function () {
        bh = $('body').height();
        bw = $('body').width();
        $("#wow").height(bh);
        $("#wow").width(bw);
        $("canvas").height(bh);
        $("canvas").width(bw);
        console.log(bw);
        Session.set("artist", this);
        artname = Session.get("artist").name;
        need = Session.get(this.sound);
        console.log(artname);
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
        $("body").css("-webkit-filter", "invert(0%)");
        $("body").css("filter", "invert(0%)");
        $(".fbut").css("-webkit-filter", "invert(0%)");
        $(".fbut").css("filter", "invert(0%)");
    },
    "click .soundoff": function () {
        masterVolume(0);
        sound = 0;
        if (mySound != null) {
            mySound.stop();
        }
        $("#wow").hide();
        $(".soundoff").hide();
        $(".soundon").show();
        $("body").css("-webkit-filter", "invert(100%)");
        $("body").css("filter", "invert(100%)");
        $(".fbut").css("-webkit-filter", "invert(0%)");
        $(".fbut").css("filter", "invert(0%)");
    },
    "click .soundon": function () {
        if (mySound != null) {
            mySound.stop();
        }
        masterVolume(1);
        sound = 1;
        $("#wow").show();
        $(".soundon").hide();
        $(".soundoff").show();
        $("body").css("-webkit-filter", "invert(0%)");
        $("body").css("filter", "invert(0%)");
        $(".fbut").css("-webkit-filter", "invert(0%)");
        $(".fbut").css("filter", "invert(0%)");
    },
    "click .randoff": function () {
        $(".all").fadeOut(100, function () { Session.set("rando", false); });
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
    "mouseenter .bassimg": function () {
        $(".dada").css("display", "block");
        $(".dada").removeClass("dadaBack");
        $(".dada").addClass("dadaFront");
        $("#wow").hide();
    },
    "mouseleave .bassimg": function () {
        $(".dada").css("display", "none");
        if (sound == 1) {
            $("#wow").show();
        }
        $('.wrapper').css('background', '#000');
        $(".dada").removeClass("dadaFront");
        $(".dada").addClass("dadaBack");

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
    "mouseenter .bassimg": function () {
        $(".dada").css("display", "block");
        $("#wow").hide();
        $('.container-fluid').css('background-size', '4px 4px');
        $(".dada").removeClass("dadaBack");
        $(".dada").addClass("dadaFront");
    },
    "mouseleave .bassimg": function () {
        $(".dada").css("display", "none");
        $('.container-fluid').css('background', '#000');
        $(".dada").removeClass("dadaFront");
        $(".dada").addClass("dadaBack");
    },
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
        $('.message').css({
            'transition':'.5s ease all', 
            'opacity':'1',
            'transform':'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)',
            '-webkit-transform':'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)',
        })
    }
});
Template.blog.events({
    "mouseenter .bassimg": function () {
        $(".dada").css("display", "block");
        $("#wow").hide();
        $('.container-fluid').css('background-size', '4px 4px');
        $(".dada").removeClass("dadaBack");
        $(".dada").addClass("dadaFront");
    },
    "mouseleave .bassimg": function () {
        $(".dada").css("display", "none");
        $('.container-fluid').css('background', '#000');
        $(".dada").removeClass("dadaFront");
        $(".dada").addClass("dadaBack");
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
        $("#wow").hide();
        $(".dada").css("display", "block");
        $('.wrapper').css('background-size', '4px 4px');
        $(".dada").removeClass("dadaBack");
        $(".dada").addClass("dadaFront");
    },
    "mouseleave .bassimg": function () {
        $(".dada").css("display", "none");
        $('.wrapper').css('background', '#000');
        $(".dada").removeClass("dadaFront");
        $(".dada").addClass("dadaBack");
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
            return Messages.find({}, { sort: { sort: -1 } });
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
    var threshold, target = $("#showMoreResults");
    if (!target.length) return;
    threshold = $(window).scrollTop() + $(window).height() - target.height();
    if (target.offset().top <= threshold) {

        if (!target.data("visible")) {
            // console.log("target became visible (inside viewable area)");
            target.data("visible", true);
            Session.set("itemsLimitOld", Session.get("itemsLimit"));
            Session.set("itemsLimit",
                Session.get("itemsLimit") + ITEMS_INCREMENT);
            $('.message').css({
                'transition':'.5s ease all', 
                'opacity':'1',
                'transform':'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)',
                '-webkit-transform':'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1)',
            })
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
            return Posts.find({}, { sort: { sort: -1 } }).fetch();
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


Template.chatfuck.rendered = function () {
    $("#wow").hide();
    $('canvas').hide();
}

Template.blog.rendered = function () {
    $("#wow").hide();
    $('canvas').hide();
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