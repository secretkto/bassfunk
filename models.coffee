Router.configure
    progressTick : false
    
@Our = new Mongo.Collection("our");
@Scene = new Mongo.Collection("scene");
@All = new Mongo.Collection("all");
@Messages = new Mongo.Collection("messages");
@Rand = @Messages;
@Posts = new Mongo.Collection("posts");
@Randpo = @Posts;
@Release = new Mongo.Collection("release");
@Backgroundfuck = new Mongo.Collection("Backgroundfuck");


@Backgroundlogo = new FS.Collection("Backgroundlogo",
	stores: [
		new FS.Store.GridFS("backgroundlogo", {
			transformWrite: (fileObj, readStream, writeStream)->
				readStream.pipe(writeStream)
		})
	]
)


@Bandlogo = new FS.Collection("Bandlogo",
	stores: [
		new FS.Store.GridFS("bandlogo", {
			transformWrite: (fileObj, readStream, writeStream)->
				readStream.pipe(writeStream)
		})
	]
)

@Bandsample = new FS.Collection("Bandsample",
	stores: [
		new FS.Store.GridFS("bandsample", {
			transformWrite: (fileObj, readStream, writeStream)->
				readStream.pipe(writeStream)
		})
	]
)

@Releaselogo = new FS.Collection("Releaselogo",
	stores: [
		new FS.Store.GridFS("releaselogo", {
			transformWrite: (fileObj, readStream, writeStream)->
				readStream.pipe(writeStream)
		})
	]
)

@Schemas = {}

@AdminConfig = {
	nonAdminRedirectRoute: 'login',
	adminEmails: ['lol@basuha.com']
	name: 'Bassfunk'
	skin: 'black',
	collections: {
		Our: {
			icon: 'pencil'
			tableColumns: [
				{label: 'Name', name: 'name'}
				{label: 'Place number', name: 'sort'} 
				{label: 'Date', name:'updatedAt'}
			]
		}
		Scene: {
			icon: 'pencil'
			tableColumns: [
				{label: 'Name', name: 'name'} 
				{label: 'Place number', name: 'sort'} 
				{label: 'Date', name:'updatedAt'}
			]
		}
		All: {
		icon: 'pencil'
		tableColumns: [
			{label: 'Name', name: 'name'} 
			{label: 'Place number', name: 'sort'} 
			{label: 'Date', name:'updatedAt'}
			]
		}
		Release: {
			icon: 'pencil'
			tableColumns: [
				{label: 'Name', name: 'name'} 
				{label: 'Place number', name: 'sort'} 
				{label: 'Date', name:'updatedAt'}
			]
		}
		Backgroundfuck: {
			icon: 'pencil'
			tableColumns: [
				{label: 'Title', name: 'title'} 
				{label: 'Date', name:'updatedAt'}
			]
		}
		Messages: {
			icon: 'pencil'
			tableColumns: [
				{label: 'Author', name: 'author'} 
				{label: 'Text', name: 'text'} 
				{label: 'Date', name:'updatedAt'}
			]
		}
		Posts: {
			icon: 'pencil'
			tableColumns: [
				{label: 'Text', name: 'text'} 
				{label: 'Date', name:'updatedAt'}
			]
		}
	}
	
}
if Meteor.isClient
	window.AdminConfig = AdminConfig
else if Meteor.isServer
	global.AdminConfig = AdminConfig

Schemas.Our = new SimpleSchema
	name:
		type:String
		max: 150

	sort:
		type: Number
		label: "Place number"


	soundcloud:
		type:String
		optional:true
		max: 750

	bandcamp:
		type:String
		optional:true
		max: 750

	facebook:
		type:String
		optional:true
		max: 750

	website:
		type:String
		optional:true
		max: 750

	vk:
		type:String
		optional:true
		max: 750

	email:
		type:String
		optional:true
		max: 750

	createdAt: 
		type: Date
		autoValue: ->
			if this.isInsert
				new Date()

	updatedAt:
		type:Date
		optional:true
		autoValue: ->
			if this.isUpdate
				new Date()

	image:
		type: String
		autoform:
			afFieldInput:
				type: 'fileUpload'
				collection: 'Bandlogo'

	sound:
		type: String
		optional:true
		autoform:
			afFieldInput:
				type: 'fileUpload'
				collection: 'Bandsample'



Our.attachSchema(Schemas.Our)


Schemas.Scene = new SimpleSchema
	name:
		type:String
		max: 150

	sort:
		type: Number
		label: "Place number"

	soundcloud:
		type:String
		optional:true
		max: 750

	bandcamp:
		type:String
		optional:true
		max: 750

	facebook:
		type:String
		optional:true
		max: 750

	website:
		type:String
		optional:true
		max: 750

	vk:
		type:String
		optional:true
		max: 750

	email:
		type:String
		optional:true
		max: 750

	createdAt: 
		type: Date
		autoValue: ->
			if this.isInsert
				new Date()

	updatedAt:
		type:Date
		optional:true
		autoValue: ->
			if this.isUpdate
				new Date()

	image:
		type: String
		autoform:
			afFieldInput:
				type: 'fileUpload'
				collection: 'Bandlogo'
				
	sound:
		type: String
		optional:true
		autoform:
			afFieldInput:
				type: 'fileUpload'
				collection: 'Bandsample'

Scene.attachSchema(Schemas.Scene)

Schemas.All = new SimpleSchema
	name:
		type:String
		max: 150

	sort:
		type: Number
		label: "Place number"

	soundcloud:
		type:String
		optional:true
		max: 750

	bandcamp:
		type:String
		optional:true
		max: 750

	facebook:
		type:String
		optional:true
		max: 750

	website:
		type:String
		optional:true
		max: 750

	vk:
		type:String
		optional:true
		max: 750

	email:
		type:String
		optional:true
		max: 750
		
	instagramm:
		type:String
		optional:true
		max: 750

	twitter:
		type:String
		optional:true
		max: 750

	youtube:
		type:String
		optional:true
		max: 750

	image:
		type: String
		autoform:
			afFieldInput:
				type: 'fileUpload'
				collection: 'Bandlogo'
				
	sound:
		type: String
		optional:true
		autoform:
			afFieldInput:
				type: 'fileUpload'
				collection: 'Bandsample'

	createdAt: 
		type: Date
		autoValue: ->
			if this.isInsert
				new Date()

	updatedAt:
		type:Date
		optional:true
		autoValue: ->
			if this.isUpdate
				new Date()

All.attachSchema(Schemas.All)


Schemas.Messages = new SimpleSchema
	author:
		type:String
		max: 750

	sort:
		type: Number
		label: "Place number"

	text:
		type:String
		max: 59750

	createdAt: 
		type: Date
		autoValue: ->
			if this.isInsert
				new Date()

	updatedAt:
		type:Date
		optional:true
		autoValue: ->
			if this.isUpdate
				new Date()

Messages.attachSchema(Schemas.Messages)

Schemas.Posts = new SimpleSchema
	text:
		type: String
		max: 59750

	sort:
		type: Number
		label: "Place number"

	createdAt: 
		type: Date
		autoValue: ->
			if this.isInsert
				new Date()

	updatedAt:
		type:Date
		optional:true
		autoValue: ->
			if this.isUpdate
				new Date()

Posts.attachSchema(Schemas.Posts)

Schemas.Release = new SimpleSchema
	name:
		type:String
		max: 150

	sort:
		type: Number
		label: "Place number"

	link:
		type:String
		optional:true
		max: 750

	createdAt: 
		type: Date
		autoValue: ->
			if this.isInsert
				new Date()

	updatedAt:
		type:Date
		optional:true
		autoValue: ->
			if this.isUpdate
				new Date()

	image:
		type: String
		autoform:
			afFieldInput:
				type: 'fileUpload'
				collection: 'Releaselogo'

Release.attachSchema(Schemas.Release)

Schemas.Backgroundfuck = new SimpleSchema
	title:
		type:String
		max: 150

	createdAt: 
		type: Date
		autoValue: ->
			if this.isInsert
				new Date()

	updatedAt:
		type:Date
		optional:true
		autoValue: ->
			if this.isUpdate
				new Date()

	image:
		type: String
		autoform:
			afFieldInput:
				type: 'fileUpload'
				collection: 'Backgroundlogo'

Backgroundfuck.attachSchema(Schemas.Backgroundfuck)

