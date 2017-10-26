Meteor.publish("all", function () {
  return All.find();
});

Meteor.publish("scene", function () {
  return Scene.find();
});

Meteor.publish("our", function () {
  return Our.find();
});

Meteor.publish("release", function () {
  return Release.find();
});

Meteor.publish("bandsample", function () {
	return Bandsample.find();
})

Meteor.publish("bandlogo", function () {
	return Bandlogo.find();
})

Meteor.publish("files", function () {
	return Files.find();
})

Meteor.publish("backgroundfuck", function () {
	return Backgroundfuck.find({}, { limit: 1, sort: {uploadedAt: -1} });
})

Meteor.publish("backgroundlogo", function () {
	return Backgroundlogo.find();
})

Meteor.publish("releaselogo", function () {
	return Releaselogo.find();
})

Meteor.publish("messages", function (limit) {
	return Messages.find({}, { limit: limit, sort: {createdAt: -1} });
})

Meteor.publish("rand", function () {
	return Rand.find();
})

Meteor.publish("posts", function (limit) {
	return Posts.find({}, { limit: limit, sort: {createdAt: -1} });
})

Meteor.publish("randpo", function () {
	return Randpo.find();
})
