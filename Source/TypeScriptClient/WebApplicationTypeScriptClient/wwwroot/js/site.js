"use strict";
// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
console.log("Hello world");
const testChannelId = 164;
const testProgramId = 2023;
const testEpisodeId = 1738930;
const client = new SrApiClient();
client.getChannels(Format.Json, undefined, undefined, undefined, undefined, undefined).then(response => {
    var _a, _b, _c;
    console.log("*** Got " + response.channels.length + " channels.");
    for (let i = 0; i < response.channels.length; i++) {
        const channel = response.channels[i];
        console.log();
        console.log("id: " + channel.id);
        console.log("name: " + channel.name);
        console.log("channeltype: " + channel.channeltype);
        console.log("color: " + channel.color);
        console.log("image: " + channel.image);
        console.log("imagetemplate: " + channel.imagetemplate);
        console.log("liveaudio.id: " + ((_a = channel.liveaudio) === null || _a === void 0 ? void 0 : _a.id));
        console.log("liveaudio.statkey: " + ((_b = channel.liveaudio) === null || _b === void 0 ? void 0 : _b.statkey));
        console.log("liveaudio.url: " + ((_c = channel.liveaudio) === null || _c === void 0 ? void 0 : _c.url));
        console.log("scheduleurl: " + channel.scheduleurl);
        console.log("siteurl: " + channel.siteurl);
        console.log("tagline: " + channel.tagline);
        console.log("xmltvid: " + channel.xmltvid);
    }
    console.log("Requesting single channel " + response.channels[0].id);
    client.getChannel(Format.Json, response.channels[0].id, undefined, undefined).then(response => {
        var _a, _b, _c;
        console.log("*** Got single channel response.");
        const channel = response.channel;
        console.log();
        console.log("id: " + channel.id);
        console.log("name: " + channel.name);
        console.log("channeltype: " + channel.channeltype);
        console.log("color: " + channel.color);
        console.log("image: " + channel.image);
        console.log("imagetemplate: " + channel.imagetemplate);
        console.log("liveaudio.id: " + ((_a = channel.liveaudio) === null || _a === void 0 ? void 0 : _a.id));
        console.log("liveaudio.statkey: " + ((_b = channel.liveaudio) === null || _b === void 0 ? void 0 : _b.statkey));
        console.log("liveaudio.url: " + ((_c = channel.liveaudio) === null || _c === void 0 ? void 0 : _c.url));
        console.log("scheduleurl: " + channel.scheduleurl);
        console.log("siteurl: " + channel.siteurl);
        console.log("tagline: " + channel.tagline);
        console.log("xmltvid: " + channel.xmltvid);
    });
});
client.getProgramCategories(Format.Json, undefined, undefined).then(response => {
    console.log("*** Got " + response.programcategories.length + " program categories.");
    for (let i = 0; i < response.programcategories.length; i++) {
        const category = response.programcategories[i];
        console.log();
        console.log("id: " + category.id);
        console.log("name: " + category.name);
    }
    console.log("Requesting single category " + response.programcategories[0].id);
    client.getProgramCategory(Format.Json, response.programcategories[0].id).then(response => {
        console.log("*** Got single program category response.");
        const category = response.programcategory;
        console.log();
        console.log("id: " + category.id);
        console.log("name: " + category.name);
    });
});
client.getPrograms(Format.Json, undefined, undefined, undefined, undefined).then(response => {
    var _a, _b, _c, _d;
    console.log("*** Got " + response.programs.length + " programs.");
    for (let i = 0; i < response.programs.length; i++) {
        const program = response.programs[i];
        console.log();
        console.log("id: " + program.id);
        console.log("name: " + program.name);
        console.log("archived: " + program.archived);
        console.log("channel.id: " + ((_a = program.channel) === null || _a === void 0 ? void 0 : _a.id));
        console.log("channel.name: " + ((_b = program.channel) === null || _b === void 0 ? void 0 : _b.name));
        console.log("hasondemand: " + program.hasondemand);
        console.log("haspod: " + program.haspod);
        console.log("programcategory.id: " + ((_c = program.programcategory) === null || _c === void 0 ? void 0 : _c.id));
        console.log("programcategory.name: " + ((_d = program.programcategory) === null || _d === void 0 ? void 0 : _d.name));
        console.log("programimage: " + program.programimage);
        console.log("programimagetemplate: " + program.programimagetemplate);
        console.log("programimagetemplatewide: " + program.programimagetemplatewide);
        console.log("programimagewide: " + program.programimagewide);
        console.log("programslug: " + program.programslug);
        console.log("programurl: " + program.programurl);
        console.log("responsibleeditor: " + program.responsibleeditor);
        console.log("socialimage: " + program.socialimage);
        console.log("socialimagetemplate: " + program.socialimagetemplate);
        console.log("socialmediaplatforms: " + program.socialmediaplatforms);
    }
    console.log("Requesting single program " + response.programs[0].id);
    client.getProgram(Format.Json, response.programs[0].id).then(response => {
        console.log("*** Got single program response.");
        const program = response.program;
        console.log();
        console.log("id: " + program.id);
        console.log("name: " + program.name);
    });
});
client.getEpisodes(Format.Json, undefined, undefined, testProgramId, undefined, undefined, undefined).then(response => {
    var _a, _b, _c, _d, _e, _f, _g;
    console.log("*** Got " + response.episodes.length + " episodes.");
    for (let i = 0; i < response.episodes.length; i++) {
        const program = response.episodes[i];
        console.log();
        console.log("id: " + program.id);
        console.log("title: " + program.title);
        console.log("audiopreference: " + program.audiopreference);
        console.log("audiopresentation: " + program.audiopresentation);
        console.log("audiopriority: " + program.audiopriority);
        console.log("program.broadcast.availablestoputc: " + ((_a = program.broadcast) === null || _a === void 0 ? void 0 : _a.availablestoputc));
        console.log("broadcasttime?.starttimeutc: " + ((_b = program.broadcasttime) === null || _b === void 0 ? void 0 : _b.starttimeutc));
        console.log("broadcasttime?.endtimeutc: " + ((_c = program.broadcasttime) === null || _c === void 0 ? void 0 : _c.endtimeutc));
        console.log("channelid: " + program.channelid);
        console.log("description: " + program.description);
        console.log("imageurl: " + program.imageurl);
        console.log("imageurltemplate: " + program.imageurltemplate);
        console.log("program.id: " + ((_d = program.program) === null || _d === void 0 ? void 0 : _d.id));
        console.log("program.name: " + ((_e = program.program) === null || _e === void 0 ? void 0 : _e.name));
        console.log("publishdateutc: " + program.publishdateutc);
        console.log("url: " + program.url);
        console.log("downloadpodfile.availablefromutc: " + ((_f = program.downloadpodfile) === null || _f === void 0 ? void 0 : _f.availablefromutc));
        console.log("listenpodfile.availablefromutc: " + ((_g = program.listenpodfile) === null || _g === void 0 ? void 0 : _g.availablefromutc));
    }
    console.log("Requesting single episode " + response.episodes[0].id);
    client.getEpisode(Format.Json, response.episodes[0].id, undefined).then(response => {
        console.log("*** Got single episode response.");
        const program = response.episode;
        console.log();
        console.log("id: " + program.id);
        console.log("title: " + program.title);
    });
});
client.getPlaylistRightNow(Format.Json, testChannelId).then(response => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10;
    console.log("*** Got right now playlist.");
    const playlist = response.playlist;
    console.log();
    console.log("channel.id: " + ((_a = playlist.channel) === null || _a === void 0 ? void 0 : _a.id));
    console.log("channel.name: " + ((_b = playlist.channel) === null || _b === void 0 ? void 0 : _b.name));
    console.log("previoussong.albumname " + ((_c = playlist.previoussong) === null || _c === void 0 ? void 0 : _c.albumname));
    console.log("previoussong.artist: " + ((_d = playlist.previoussong) === null || _d === void 0 ? void 0 : _d.artist));
    console.log("previoussong.composer: " + ((_e = playlist.previoussong) === null || _e === void 0 ? void 0 : _e.composer));
    console.log("previoussong.conductor: " + ((_f = playlist.previoussong) === null || _f === void 0 ? void 0 : _f.conductor));
    console.log("previoussong.description: " + ((_g = playlist.previoussong) === null || _g === void 0 ? void 0 : _g.description));
    console.log("previoussong.lyricist: " + ((_h = playlist.previoussong) === null || _h === void 0 ? void 0 : _h.lyricist));
    console.log("previoussong.producer: " + ((_j = playlist.previoussong) === null || _j === void 0 ? void 0 : _j.producer));
    console.log("previoussong.recordlabel: " + ((_k = playlist.previoussong) === null || _k === void 0 ? void 0 : _k.recordlabel));
    console.log("previoussong.starttimeutc: " + ((_l = playlist.previoussong) === null || _l === void 0 ? void 0 : _l.starttimeutc));
    console.log("previoussong.stoptimeutc: " + ((_m = playlist.previoussong) === null || _m === void 0 ? void 0 : _m.stoptimeutc));
    console.log("previoussong.title: " + ((_o = playlist.previoussong) === null || _o === void 0 ? void 0 : _o.title));
    console.log("song.albumname " + ((_p = playlist.song) === null || _p === void 0 ? void 0 : _p.albumname));
    console.log("song.artist: " + ((_q = playlist.song) === null || _q === void 0 ? void 0 : _q.artist));
    console.log("song.composer: " + ((_r = playlist.song) === null || _r === void 0 ? void 0 : _r.composer));
    console.log("song.conductor: " + ((_s = playlist.song) === null || _s === void 0 ? void 0 : _s.conductor));
    console.log("song.description: " + ((_t = playlist.song) === null || _t === void 0 ? void 0 : _t.description));
    console.log("song.lyricist: " + ((_u = playlist.song) === null || _u === void 0 ? void 0 : _u.lyricist));
    console.log("song.producer: " + ((_v = playlist.song) === null || _v === void 0 ? void 0 : _v.producer));
    console.log("song.recordlabel: " + ((_w = playlist.song) === null || _w === void 0 ? void 0 : _w.recordlabel));
    console.log("song.starttimeutc: " + ((_x = playlist.song) === null || _x === void 0 ? void 0 : _x.starttimeutc));
    console.log("song.stoptimeutc: " + ((_y = playlist.song) === null || _y === void 0 ? void 0 : _y.stoptimeutc));
    console.log("nextsong.title: " + ((_z = playlist.nextsong) === null || _z === void 0 ? void 0 : _z.title));
    console.log("nextsong.albumname " + ((_0 = playlist.nextsong) === null || _0 === void 0 ? void 0 : _0.albumname));
    console.log("nextsong.artist: " + ((_1 = playlist.nextsong) === null || _1 === void 0 ? void 0 : _1.artist));
    console.log("nextsong.composer: " + ((_2 = playlist.nextsong) === null || _2 === void 0 ? void 0 : _2.composer));
    console.log("nextsong.conductor: " + ((_3 = playlist.nextsong) === null || _3 === void 0 ? void 0 : _3.conductor));
    console.log("nextsong.description: " + ((_4 = playlist.nextsong) === null || _4 === void 0 ? void 0 : _4.description));
    console.log("nextsong.lyricist: " + ((_5 = playlist.nextsong) === null || _5 === void 0 ? void 0 : _5.lyricist));
    console.log("nextsong.producer: " + ((_6 = playlist.nextsong) === null || _6 === void 0 ? void 0 : _6.producer));
    console.log("nextsong.recordlabel: " + ((_7 = playlist.nextsong) === null || _7 === void 0 ? void 0 : _7.recordlabel));
    console.log("nextsong.starttimeutc: " + ((_8 = playlist.nextsong) === null || _8 === void 0 ? void 0 : _8.starttimeutc));
    console.log("nextsong.stoptimeutc: " + ((_9 = playlist.nextsong) === null || _9 === void 0 ? void 0 : _9.stoptimeutc));
    console.log("nextsong.title: " + ((_10 = playlist.nextsong) === null || _10 === void 0 ? void 0 : _10.title));
});
client.getPlaylistByChannel(Format.Json, undefined, testChannelId, undefined, undefined).then(response => {
    console.log("*** Got " + response.song.length + " songs for channel " + testChannelId + ".");
    for (let i = 0; i < response.song.length; i++) {
        const song = response.song[i];
        console.log();
        console.log("song.albumname " + song.albumname);
        console.log("song.artist: " + song.artist);
        console.log("song.composer: " + song.composer);
        console.log("song.conductor: " + song.conductor);
        console.log("song.description: " + song.description);
        console.log("song.lyricist: " + song.lyricist);
        console.log("song.producer: " + song.producer);
        console.log("song.recordlabel: " + song.recordlabel);
        console.log("song.starttimeutc: " + song.starttimeutc);
        console.log("song.stoptimeutc: " + song.stoptimeutc);
    }
});
client.getPlaylistByProgram(Format.Json, undefined, testProgramId, undefined, undefined).then(response => {
    console.log("*** Got " + response.song.length + " songs for program " + testProgramId + ".");
    for (let i = 0; i < response.song.length; i++) {
        const song = response.song[i];
        console.log();
        console.log("song.albumname " + song.albumname);
        console.log("song.artist: " + song.artist);
        console.log("song.composer: " + song.composer);
        console.log("song.conductor: " + song.conductor);
        console.log("song.description: " + song.description);
        console.log("song.lyricist: " + song.lyricist);
        console.log("song.producer: " + song.producer);
        console.log("song.recordlabel: " + song.recordlabel);
        console.log("song.starttimeutc: " + song.starttimeutc);
        console.log("song.stoptimeutc: " + song.stoptimeutc);
    }
});
client.getPlaylistByEpisode(Format.Json, testEpisodeId).then(response => {
    console.log("*** Got " + response.song.length + " songs for episode " + testEpisodeId + ".");
    for (let i = 0; i < response.song.length; i++) {
        const song = response.song[i];
        console.log();
        console.log("song.albumname " + song.albumname);
        console.log("song.artist: " + song.artist);
        console.log("song.composer: " + song.composer);
        console.log("song.conductor: " + song.conductor);
        console.log("song.description: " + song.description);
        console.log("song.lyricist: " + song.lyricist);
        console.log("song.producer: " + song.producer);
        console.log("song.recordlabel: " + song.recordlabel);
        console.log("song.starttimeutc: " + song.starttimeutc);
        console.log("song.stoptimeutc: " + song.stoptimeutc);
    }
});
client.getNewsPrograms(Format.Json).then(response => {
    var _a, _b, _c, _d;
    console.log("*** Got " + response.programs.length + " news programs.");
    for (let i = 0; i < response.programs.length; i++) {
        const program = response.programs[i];
        console.log();
        console.log("id: " + program.id);
        console.log("name: " + program.name);
        console.log("archived: " + program.archived);
        console.log("channel.id: " + ((_a = program.channel) === null || _a === void 0 ? void 0 : _a.id));
        console.log("channel.name: " + ((_b = program.channel) === null || _b === void 0 ? void 0 : _b.name));
        console.log("hasondemand: " + program.hasondemand);
        console.log("haspod: " + program.haspod);
        console.log("programcategory.id: " + ((_c = program.programcategory) === null || _c === void 0 ? void 0 : _c.id));
        console.log("programcategory.name: " + ((_d = program.programcategory) === null || _d === void 0 ? void 0 : _d.name));
        console.log("programimage: " + program.programimage);
        console.log("programimagetemplate: " + program.programimagetemplate);
        console.log("programimagetemplatewide: " + program.programimagetemplatewide);
        console.log("programimagewide: " + program.programimagewide);
        console.log("programslug: " + program.programslug);
        console.log("programurl: " + program.programurl);
        console.log("responsibleeditor: " + program.responsibleeditor);
        console.log("socialimage: " + program.socialimage);
        console.log("socialimagetemplate: " + program.socialimagetemplate);
        console.log("socialmediaplatforms: " + program.socialmediaplatforms);
    }
});
client.getNewsEpisodes(Format.Json, undefined).then(response => {
    var _a, _b, _c, _d, _e, _f, _g;
    console.log("*** Got " + response.episodes.length + " episodes.");
    for (let i = 0; i < response.episodes.length; i++) {
        const program = response.episodes[i];
        console.log();
        console.log("id: " + program.id);
        console.log("title: " + program.title);
        console.log("audiopreference: " + program.audiopreference);
        console.log("audiopresentation: " + program.audiopresentation);
        console.log("audiopriority: " + program.audiopriority);
        console.log("program.broadcast.availablestoputc: " + ((_a = program.broadcast) === null || _a === void 0 ? void 0 : _a.availablestoputc));
        console.log("broadcasttime?.starttimeutc: " + ((_b = program.broadcasttime) === null || _b === void 0 ? void 0 : _b.starttimeutc));
        console.log("broadcasttime?.endtimeutc: " + ((_c = program.broadcasttime) === null || _c === void 0 ? void 0 : _c.endtimeutc));
        console.log("channelid: " + program.channelid);
        console.log("description: " + program.description);
        console.log("imageurl: " + program.imageurl);
        console.log("imageurltemplate: " + program.imageurltemplate);
        console.log("program.id: " + ((_d = program.program) === null || _d === void 0 ? void 0 : _d.id));
        console.log("program.name: " + ((_e = program.program) === null || _e === void 0 ? void 0 : _e.name));
        console.log("publishdateutc: " + program.publishdateutc);
        console.log("url: " + program.url);
        console.log("downloadpodfile.url: " + ((_f = program.downloadpodfile) === null || _f === void 0 ? void 0 : _f.url));
        console.log("listenpodfile.url: " + ((_g = program.listenpodfile) === null || _g === void 0 ? void 0 : _g.url));
    }
});
client.getExtraBroadcasts(Format.Json, undefined, undefined).then(response => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    console.log("*** Got " + response.broadcasts.length + " broadcasts.");
    for (let i = 0; i < response.broadcasts.length; i++) {
        const program = response.broadcasts[i];
        console.log();
        console.log("id: " + program.id);
        console.log("channel.id: " + ((_a = program.channel) === null || _a === void 0 ? void 0 : _a.id));
        console.log("channel.name: " + ((_b = program.channel) === null || _b === void 0 ? void 0 : _b.name));
        console.log("description: " + program.description);
        console.log("liveaudio.url: " + ((_c = program.liveaudio) === null || _c === void 0 ? void 0 : _c.url));
        console.log("liveaudio.statkey: " + ((_d = program.liveaudio) === null || _d === void 0 ? void 0 : _d.statkey));
        console.log("localstarttime: " + program.localstarttime);
        console.log("localstoptime: " + program.localstoptime);
        console.log("mobileliveaudio.url: " + ((_e = program.mobileliveaudio) === null || _e === void 0 ? void 0 : _e.url));
        console.log("mobileliveaudio.statkey: " + ((_f = program.mobileliveaudio) === null || _f === void 0 ? void 0 : _f.statkey));
        console.log("name: " + program.name);
        console.log("publisher.id: " + ((_g = program.publisher) === null || _g === void 0 ? void 0 : _g.id));
        console.log("publisher.name: " + ((_h = program.publisher) === null || _h === void 0 ? void 0 : _h.name));
        console.log("sport: " + program.sport);
    }
});
client.getScheduledEpisodesForChannel(Format.Json, undefined, undefined, testChannelId, undefined).then(response => {
    var _a, _b, _c, _d;
    console.log("*** Got " + response.schedule.length + " schedule.");
    for (let i = 0; i < response.schedule.length; i++) {
        const scheduledEpisode = response.schedule[i];
        console.log();
        console.log("episodeid: " + scheduledEpisode.episodeid);
        console.log("channel.id: " + ((_a = scheduledEpisode.channel) === null || _a === void 0 ? void 0 : _a.id));
        console.log("channel.name: " + ((_b = scheduledEpisode.channel) === null || _b === void 0 ? void 0 : _b.name));
        console.log("description: " + scheduledEpisode.description);
        console.log("endtimeutc: " + scheduledEpisode.endtimeutc);
        console.log("imageurl: " + scheduledEpisode.imageurl);
        console.log("imageurltemplate: " + scheduledEpisode.imageurltemplate);
        console.log("program.id: " + ((_c = scheduledEpisode.program) === null || _c === void 0 ? void 0 : _c.id));
        console.log("program.name: " + ((_d = scheduledEpisode.program) === null || _d === void 0 ? void 0 : _d.name));
        console.log("starttimeutc: " + scheduledEpisode.starttimeutc);
        console.log("title: " + scheduledEpisode.title);
    }
});
client.getScheduledEpisodesForProgram(Format.Json, undefined, undefined, testProgramId, new Date(2020, 1, 1), new Date(2021, 1, 1)).then(response => {
    var _a, _b, _c, _d;
    console.log("*** Got " + response.schedule.length + " schedule.");
    for (let i = 0; i < response.schedule.length; i++) {
        const scheduledEpisode = response.schedule[i];
        console.log();
        console.log("episodeid: " + scheduledEpisode.episodeid);
        console.log("channel.id: " + ((_a = scheduledEpisode.channel) === null || _a === void 0 ? void 0 : _a.id));
        console.log("channel.name: " + ((_b = scheduledEpisode.channel) === null || _b === void 0 ? void 0 : _b.name));
        console.log("description: " + scheduledEpisode.description);
        console.log("endtimeutc: " + scheduledEpisode.endtimeutc);
        console.log("imageurl: " + scheduledEpisode.imageurl);
        console.log("imageurltemplate: " + scheduledEpisode.imageurltemplate);
        console.log("program.id: " + ((_c = scheduledEpisode.program) === null || _c === void 0 ? void 0 : _c.id));
        console.log("program.name: " + ((_d = scheduledEpisode.program) === null || _d === void 0 ? void 0 : _d.name));
        console.log("starttimeutc: " + scheduledEpisode.starttimeutc);
        console.log("title: " + scheduledEpisode.title);
    }
});
client.getEpisodesRightNowAllChannels(Format.Json, undefined, undefined).then(response => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    console.log("*** Got " + response.channels.length + " channels.");
    for (let i = 0; i < response.channels.length; i++) {
        const channel = response.channels[i];
        console.log();
        console.log("id: " + channel.id);
        console.log("name: " + channel.name);
        console.log("previousscheduledepisode.description: " + ((_a = channel.previousscheduledepisode) === null || _a === void 0 ? void 0 : _a.description));
        console.log("previousscheduledepisode.endtimeutc: " + ((_b = channel.previousscheduledepisode) === null || _b === void 0 ? void 0 : _b.endtimeutc));
        console.log("previousscheduledepisode.episodeid;: " + ((_c = channel.previousscheduledepisode) === null || _c === void 0 ? void 0 : _c.episodeid));
        console.log("previousscheduledepisode.program.id: " + ((_e = (_d = channel.previousscheduledepisode) === null || _d === void 0 ? void 0 : _d.program) === null || _e === void 0 ? void 0 : _e.id));
        console.log("previousscheduledepisode.program.name: " + ((_g = (_f = channel.previousscheduledepisode) === null || _f === void 0 ? void 0 : _f.program) === null || _g === void 0 ? void 0 : _g.name));
        console.log("previousscheduledepisode.socialimage: " + ((_h = channel.previousscheduledepisode) === null || _h === void 0 ? void 0 : _h.socialimage));
        console.log("previousscheduledepisode.starttimeut: " + ((_j = channel.previousscheduledepisode) === null || _j === void 0 ? void 0 : _j.starttimeutc));
        console.log("previousscheduledepisode.title: " + ((_k = channel.previousscheduledepisode) === null || _k === void 0 ? void 0 : _k.title));
        console.log("currentscheduledepisode.description: " + ((_l = channel.currentscheduledepisode) === null || _l === void 0 ? void 0 : _l.description));
        console.log("currentscheduledepisode.endtimeutc: " + ((_m = channel.currentscheduledepisode) === null || _m === void 0 ? void 0 : _m.endtimeutc));
        console.log("currentscheduledepisode.episodeid;: " + ((_o = channel.currentscheduledepisode) === null || _o === void 0 ? void 0 : _o.episodeid));
        console.log("currentscheduledepisode.program.id: " + ((_q = (_p = channel.currentscheduledepisode) === null || _p === void 0 ? void 0 : _p.program) === null || _q === void 0 ? void 0 : _q.id));
        console.log("currentscheduledepisode.program.name: " + ((_s = (_r = channel.currentscheduledepisode) === null || _r === void 0 ? void 0 : _r.program) === null || _s === void 0 ? void 0 : _s.name));
        console.log("currentscheduledepisode.socialimage: " + ((_t = channel.currentscheduledepisode) === null || _t === void 0 ? void 0 : _t.socialimage));
        console.log("currentscheduledepisode.starttimeut: " + ((_u = channel.currentscheduledepisode) === null || _u === void 0 ? void 0 : _u.starttimeutc));
        console.log("currentscheduledepisode.title: " + ((_v = channel.currentscheduledepisode) === null || _v === void 0 ? void 0 : _v.title));
        console.log("nextscheduledepisode.description: " + ((_w = channel.nextscheduledepisode) === null || _w === void 0 ? void 0 : _w.description));
        console.log("nextscheduledepisode.endtimeutc: " + ((_x = channel.nextscheduledepisode) === null || _x === void 0 ? void 0 : _x.endtimeutc));
        console.log("nextscheduledepisode.episodeid;: " + ((_y = channel.nextscheduledepisode) === null || _y === void 0 ? void 0 : _y.episodeid));
        console.log("nextscheduledepisode.program.id: " + ((_0 = (_z = channel.nextscheduledepisode) === null || _z === void 0 ? void 0 : _z.program) === null || _0 === void 0 ? void 0 : _0.id));
        console.log("nextscheduledepisode.program.name: " + ((_2 = (_1 = channel.nextscheduledepisode) === null || _1 === void 0 ? void 0 : _1.program) === null || _2 === void 0 ? void 0 : _2.name));
        console.log("nextscheduledepisode.socialimage: " + ((_3 = channel.nextscheduledepisode) === null || _3 === void 0 ? void 0 : _3.socialimage));
        console.log("nextscheduledepisode.starttimeut: " + ((_4 = channel.nextscheduledepisode) === null || _4 === void 0 ? void 0 : _4.starttimeutc));
        console.log("nextscheduledepisode.title: " + ((_5 = channel.nextscheduledepisode) === null || _5 === void 0 ? void 0 : _5.title));
    }
});
client.getEpisodesRightNowForChannel(Format.Json, testChannelId).then(response => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
    const channel = response.channel;
    console.log();
    console.log("id: " + channel.id);
    console.log("name: " + channel.name);
    console.log("previousscheduledepisode.description: " + ((_a = channel.previousscheduledepisode) === null || _a === void 0 ? void 0 : _a.description));
    console.log("previousscheduledepisode.endtimeutc: " + ((_b = channel.previousscheduledepisode) === null || _b === void 0 ? void 0 : _b.endtimeutc));
    console.log("previousscheduledepisode.episodeid;: " + ((_c = channel.previousscheduledepisode) === null || _c === void 0 ? void 0 : _c.episodeid));
    console.log("previousscheduledepisode.program.id: " + ((_e = (_d = channel.previousscheduledepisode) === null || _d === void 0 ? void 0 : _d.program) === null || _e === void 0 ? void 0 : _e.id));
    console.log("previousscheduledepisode.program.name: " + ((_g = (_f = channel.previousscheduledepisode) === null || _f === void 0 ? void 0 : _f.program) === null || _g === void 0 ? void 0 : _g.name));
    console.log("previousscheduledepisode.socialimage: " + ((_h = channel.previousscheduledepisode) === null || _h === void 0 ? void 0 : _h.socialimage));
    console.log("previousscheduledepisode.starttimeut: " + ((_j = channel.previousscheduledepisode) === null || _j === void 0 ? void 0 : _j.starttimeutc));
    console.log("previousscheduledepisode.title: " + ((_k = channel.previousscheduledepisode) === null || _k === void 0 ? void 0 : _k.title));
    console.log("currentscheduledepisode.description: " + ((_l = channel.currentscheduledepisode) === null || _l === void 0 ? void 0 : _l.description));
    console.log("currentscheduledepisode.endtimeutc: " + ((_m = channel.currentscheduledepisode) === null || _m === void 0 ? void 0 : _m.endtimeutc));
    console.log("currentscheduledepisode.episodeid;: " + ((_o = channel.currentscheduledepisode) === null || _o === void 0 ? void 0 : _o.episodeid));
    console.log("currentscheduledepisode.program.id: " + ((_q = (_p = channel.currentscheduledepisode) === null || _p === void 0 ? void 0 : _p.program) === null || _q === void 0 ? void 0 : _q.id));
    console.log("currentscheduledepisode.program.name: " + ((_s = (_r = channel.currentscheduledepisode) === null || _r === void 0 ? void 0 : _r.program) === null || _s === void 0 ? void 0 : _s.name));
    console.log("currentscheduledepisode.socialimage: " + ((_t = channel.currentscheduledepisode) === null || _t === void 0 ? void 0 : _t.socialimage));
    console.log("currentscheduledepisode.starttimeut: " + ((_u = channel.currentscheduledepisode) === null || _u === void 0 ? void 0 : _u.starttimeutc));
    console.log("currentscheduledepisode.title: " + ((_v = channel.currentscheduledepisode) === null || _v === void 0 ? void 0 : _v.title));
    console.log("nextscheduledepisode.description: " + ((_w = channel.nextscheduledepisode) === null || _w === void 0 ? void 0 : _w.description));
    console.log("nextscheduledepisode.endtimeutc: " + ((_x = channel.nextscheduledepisode) === null || _x === void 0 ? void 0 : _x.endtimeutc));
    console.log("nextscheduledepisode.episodeid;: " + ((_y = channel.nextscheduledepisode) === null || _y === void 0 ? void 0 : _y.episodeid));
    console.log("nextscheduledepisode.program.id: " + ((_0 = (_z = channel.nextscheduledepisode) === null || _z === void 0 ? void 0 : _z.program) === null || _0 === void 0 ? void 0 : _0.id));
    console.log("nextscheduledepisode.program.name: " + ((_2 = (_1 = channel.nextscheduledepisode) === null || _1 === void 0 ? void 0 : _1.program) === null || _2 === void 0 ? void 0 : _2.name));
    console.log("nextscheduledepisode.socialimage: " + ((_3 = channel.nextscheduledepisode) === null || _3 === void 0 ? void 0 : _3.socialimage));
    console.log("nextscheduledepisode.starttimeut: " + ((_4 = channel.nextscheduledepisode) === null || _4 === void 0 ? void 0 : _4.starttimeutc));
    console.log("nextscheduledepisode.title: " + ((_5 = channel.nextscheduledepisode) === null || _5 === void 0 ? void 0 : _5.title));
});
client.getLastPublishedShows(Format.Json, undefined, undefined, undefined).then(response => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    console.log("*** Got " + response.shows.length + " shows.");
    for (let i = 0; i < response.shows.length; i++) {
        const show = response.shows[i];
        console.log();
        console.log("id: " + show.id);
        console.log("name: " + show.title);
        console.log("broadcast.availablestoputc: " + ((_a = show.broadcast) === null || _a === void 0 ? void 0 : _a.availablestoputc));
        console.log("broadcast.broadcastfiles.length: " + ((_c = (_b = show.broadcast) === null || _b === void 0 ? void 0 : _b.broadcastfiles) === null || _c === void 0 ? void 0 : _c.length));
        console.log("broadcast.playlist.duration: " + ((_e = (_d = show.broadcast) === null || _d === void 0 ? void 0 : _d.playlist) === null || _e === void 0 ? void 0 : _e.duration));
        console.log("broadcast.playlist.id: " + ((_g = (_f = show.broadcast) === null || _f === void 0 ? void 0 : _f.playlist) === null || _g === void 0 ? void 0 : _g.id));
        console.log("broadcast.playlist.publishdateutc: " + ((_j = (_h = show.broadcast) === null || _h === void 0 ? void 0 : _h.playlist) === null || _j === void 0 ? void 0 : _j.publishdateutc));
        console.log("broadcast.playlist.statkey: " + ((_l = (_k = show.broadcast) === null || _k === void 0 ? void 0 : _k.playlist) === null || _l === void 0 ? void 0 : _l.statkey));
        console.log("broadcast.playlist.url: " + ((_o = (_m = show.broadcast) === null || _m === void 0 ? void 0 : _m.playlist) === null || _o === void 0 ? void 0 : _o.url));
        console.log("description: " + show.description);
        console.log("endtimeutc: " + show.endtimeutc);
        console.log("imageurl: " + show.imageurl);
        console.log("imageurltemplate: " + show.imageurltemplate);
        console.log("program.id: " + ((_p = show.program) === null || _p === void 0 ? void 0 : _p.id));
        console.log("program.name: " + ((_q = show.program) === null || _q === void 0 ? void 0 : _q.name));
        console.log("starttimeutc: " + show.starttimeutc);
    }
});
client.getImportantMessages(Format.Json).then(response => {
    console.log("*** Got " + response.messages.length + " messages.");
    for (let i = 0; i < response.messages.length; i++) {
        const message = response.messages[i];
        console.log();
        console.log("id: " + message.id);
        console.log("name: " + message.title);
        console.log("date: " + message.date);
        console.log("description: " + message.description);
        console.log("url: " + message.url);
    }
});
client.getTrafficAreas(Format.Json, undefined, undefined).then(response => {
    console.log("*** Got " + response.areas.length + " area.");
    for (let i = 0; i < response.areas.length; i++) {
        const area = response.areas[i];
        console.log();
        console.log("name: " + area.name);
        console.log("radius: " + area.radius);
        console.log("trafficdepartmentunitid: " + area.trafficdepartmentunitid);
        console.log("zoom: " + area.zoom);
    }
});
client.getTrafficArea(Format.Json, 3.123, -78.5345).then(response => {
    const area = response.area;
    console.log();
    console.log("name: " + area.name);
    console.log("radius: " + area.radius);
    console.log("trafficdepartmentunitid: " + area.trafficdepartmentunitid);
    console.log("zoom: " + area.zoom);
});
client.getTrafficMessages(Format.Json, undefined, undefined, undefined).then(response => {
    console.log("*** Got " + response.messages.length + " area.");
    for (let i = 0; i < response.messages.length; i++) {
        const area = response.messages[i];
        console.log();
        console.log("id: " + area.id);
        console.log("title: " + area.title);
        console.log("category: " + area.category);
        console.log("createddate: " + area.createddate);
        console.log("description: " + area.description);
        console.log("exactlocation: " + area.exactlocation);
        console.log("latitude: " + area.latitude);
        console.log("longitude: " + area.longitude);
        console.log("priority: " + area.priority);
        console.log("subcategory: " + area.subcategory);
    }
});
//# sourceMappingURL=site.js.map