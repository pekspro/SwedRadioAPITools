// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

console.log("Hello world");

const testChannelId = 164;
const testProgramId = 2023;
const testEpisodeId = 1738930;
const client = new SrApiClient();

 
client.getChannels(
    Format.Json,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
).then(response => {

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
        console.log("liveaudio.id: " + channel.liveaudio?.id);
        console.log("liveaudio.statkey: " + channel.liveaudio?.statkey);
        console.log("liveaudio.url: " + channel.liveaudio?.url);
        console.log("scheduleurl: " + channel.scheduleurl);
        console.log("siteurl: " + channel.siteurl);
        console.log("tagline: " + channel.tagline);
        console.log("xmltvid: " + channel.xmltvid);
    }

    console.log("Requesting single channel " + response.channels[0].id);

    client.getChannel(
        Format.Json,
        response.channels[0].id,
        undefined,
        undefined
    ).then(response => {

        console.log("*** Got single channel response.");

        const channel = response.channel;

        console.log();
        console.log("id: " + channel.id);
        console.log("name: " + channel.name);
        console.log("channeltype: " + channel.channeltype);
        console.log("color: " + channel.color);
        console.log("image: " + channel.image);
        console.log("imagetemplate: " + channel.imagetemplate);
        console.log("liveaudio.id: " + channel.liveaudio?.id);
        console.log("liveaudio.statkey: " + channel.liveaudio?.statkey);
        console.log("liveaudio.url: " + channel.liveaudio?.url);
        console.log("scheduleurl: " + channel.scheduleurl);
        console.log("siteurl: " + channel.siteurl);
        console.log("tagline: " + channel.tagline);
        console.log("xmltvid: " + channel.xmltvid);
    });
});

client.getProgramCategories(
    Format.Json,
    undefined,
    undefined
).then(response => {

    console.log("*** Got " + response.programcategories.length + " program categories.");

    for (let i = 0; i < response.programcategories.length; i++) {
        const category = response.programcategories[i];

        console.log();
        console.log("id: " + category.id);
        console.log("name: " + category.name);
    }

    console.log("Requesting single category " + response.programcategories[0].id);

    client.getProgramCategory(
        Format.Json,
        response.programcategories[0].id
    ).then(response => {

        console.log("*** Got single program category response.");

        const category = response.programcategory;

        console.log();
        console.log("id: " + category.id);
        console.log("name: " + category.name);
    });
});



client.getPrograms(
    Format.Json,
    undefined,
    undefined,
    undefined,
    undefined
).then(response => {

    console.log("*** Got " + response.programs.length + " programs.");

    for (let i = 0; i < response.programs.length; i++) {
        const program = response.programs[i];

        console.log();
        console.log("id: " + program.id);
        console.log("name: " + program.name);
        console.log("archived: " + program.archived);
        console.log("broadcastinfo: " + program.broadcastinfo);
        console.log("channel.id: " + program.channel?.id);
        console.log("channel.name: " + program.channel?.name);
        console.log("description: " + program.description);
        console.log("email: " + program.email);
        console.log("hasondemand: " + program.hasondemand);
        console.log("haspod: " + program.haspod);
        console.log("payoff: " + program.payoff);
        console.log("phone: " + program.phone);
        console.log("programcategory.id: " + program.programcategory?.id);
        console.log("programcategory.name: " + program.programcategory?.name);
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

    client.getProgram(
        Format.Json,
        response.programs[0].id
    ).then(response => {

        console.log("*** Got single program response.");

        const program = response.program;

        console.log();
        console.log("id: " + program.id);
        console.log("name: " + program.name);
    });
});


client.getEpisodes(
    Format.Json,
    undefined,
    undefined,
    testProgramId,
    undefined,
    undefined,
    undefined
).then(response => {

    console.log("*** Got " + response.episodes.length + " episodes.");

    for (let i = 0; i < response.episodes.length; i++) {
        const program = response.episodes[i];

        console.log();
        console.log("id: " + program.id);
        console.log("title: " + program.title);
        console.log("audiopreference: " + program.audiopreference);
        console.log("audiopresentation: " + program.audiopresentation);
        console.log("audiopriority: " + program.audiopriority);
        console.log("program.broadcast.availablestoputc: " + program.broadcast?.availablestoputc);
        console.log("broadcasttime?.starttimeutc: " + program.broadcasttime?.starttimeutc);
        console.log("broadcasttime?.endtimeutc: " + program.broadcasttime?.endtimeutc);
        console.log("channelid: " + program.channelid);
        console.log("description: " + program.description);
        console.log("imageurl: " + program.imageurl);
        console.log("imageurltemplate: " + program.imageurltemplate);
        console.log("program.id: " + program.program?.id);
        console.log("program.name: " + program.program?.name);
        console.log("publishdateutc: " + program.publishdateutc);
        console.log("url: " + program.url);
        console.log("downloadpodfile.availablefromutc: " + program.downloadpodfile?.availablefromutc);
        console.log("listenpodfile.availablefromutc: " + program.listenpodfile?.availablefromutc);
    }

    console.log("Requesting single episode " + response.episodes[0].id);

    client.getEpisode(
        Format.Json,
        response.episodes[0].id,
        undefined
    ).then(response => {

        console.log("*** Got single episode response.");

        const program = response.episode;

        console.log();
        console.log("id: " + program.id);
        console.log("title: " + program.title);
    });
});


client.getPlaylistRightNow(
    Format.Json,
    testChannelId
    
).then(response => {

    console.log("*** Got right now playlist.");

    const playlist = response.playlist;

    console.log();
    console.log("channel.id: " + playlist.channel?.id);
    console.log("channel.name: " + playlist.channel?.name);
    console.log("previoussong.albumname " + playlist.previoussong?.albumname);
    console.log("previoussong.artist: " + playlist.previoussong?.artist);
    console.log("previoussong.composer: " + playlist.previoussong?.composer);
    console.log("previoussong.conductor: " + playlist.previoussong?.conductor);
    console.log("previoussong.description: " + playlist.previoussong?.description);
    console.log("previoussong.lyricist: " + playlist.previoussong?.lyricist);
    console.log("previoussong.producer: " + playlist.previoussong?.producer);
    console.log("previoussong.recordlabel: " + playlist.previoussong?.recordlabel);
    console.log("previoussong.starttimeutc: " + playlist.previoussong?.starttimeutc);
    console.log("previoussong.stoptimeutc: " + playlist.previoussong?.stoptimeutc);
    console.log("previoussong.title: " + playlist.previoussong?.title);
    console.log("song.albumname " + playlist.song?.albumname);
    console.log("song.artist: " + playlist.song?.artist);
    console.log("song.composer: " + playlist.song?.composer);
    console.log("song.conductor: " + playlist.song?.conductor);
    console.log("song.description: " + playlist.song?.description);
    console.log("song.lyricist: " + playlist.song?.lyricist);
    console.log("song.producer: " + playlist.song?.producer);
    console.log("song.recordlabel: " + playlist.song?.recordlabel);
    console.log("song.starttimeutc: " + playlist.song?.starttimeutc);
    console.log("song.stoptimeutc: " + playlist.song?.stoptimeutc);
    console.log("nextsong.title: " + playlist.nextsong?.title);
    console.log("nextsong.albumname " + playlist.nextsong?.albumname);
    console.log("nextsong.artist: " + playlist.nextsong?.artist);
    console.log("nextsong.composer: " + playlist.nextsong?.composer);
    console.log("nextsong.conductor: " + playlist.nextsong?.conductor);
    console.log("nextsong.description: " + playlist.nextsong?.description);
    console.log("nextsong.lyricist: " + playlist.nextsong?.lyricist);
    console.log("nextsong.producer: " + playlist.nextsong?.producer);
    console.log("nextsong.recordlabel: " + playlist.nextsong?.recordlabel);
    console.log("nextsong.starttimeutc: " + playlist.nextsong?.starttimeutc);
    console.log("nextsong.stoptimeutc: " + playlist.nextsong?.stoptimeutc);
    console.log("nextsong.title: " + playlist.nextsong?.title);
});                      

client.getPlaylistByChannel(
    Format.Json,
    undefined,
    testChannelId,
    undefined,
    undefined

).then(response => {

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

client.getPlaylistByProgram(
    Format.Json,
    undefined,
    testProgramId,
    undefined,
    undefined

).then(response => {

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

client.getPlaylistByEpisode(
    Format.Json,
    testEpisodeId
).then(response => {

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


client.getNewsPrograms(
    Format.Json
).then(response => {

    console.log("*** Got " + response.programs.length + " news programs.");

    for (let i = 0; i < response.programs.length; i++) {
        const program = response.programs[i];

        console.log();
        console.log("id: " + program.id);
        console.log("name: " + program.name);
        console.log("archived: " + program.archived);
        console.log("channel.id: " + program.channel?.id);
        console.log("channel.name: " + program.channel?.name);
        console.log("hasondemand: " + program.hasondemand);
        console.log("haspod: " + program.haspod);
        console.log("programcategory.id: " + program.programcategory?.id);
        console.log("programcategory.name: " + program.programcategory?.name);
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


client.getNewsEpisodes(
    Format.Json,
    undefined
).then(response => {

    console.log("*** Got " + response.episodes.length + " episodes.");

    for (let i = 0; i < response.episodes.length; i++) {
        const program = response.episodes[i];

        console.log();
        console.log("id: " + program.id);
        console.log("title: " + program.title);
        console.log("audiopreference: " + program.audiopreference);
        console.log("audiopresentation: " + program.audiopresentation);
        console.log("audiopriority: " + program.audiopriority);
        console.log("program.broadcast.availablestoputc: " + program.broadcast?.availablestoputc);
        console.log("broadcasttime?.starttimeutc: " + program.broadcasttime?.starttimeutc);
        console.log("broadcasttime?.endtimeutc: " + program.broadcasttime?.endtimeutc);
        console.log("channelid: " + program.channelid);
        console.log("description: " + program.description);
        console.log("imageurl: " + program.imageurl);
        console.log("imageurltemplate: " + program.imageurltemplate);
        console.log("program.id: " + program.program?.id);
        console.log("program.name: " + program.program?.name);
        console.log("publishdateutc: " + program.publishdateutc);
        console.log("url: " + program.url);
        console.log("downloadpodfile.url: " + program.downloadpodfile?.url);
        console.log("listenpodfile.url: " + program.listenpodfile?.url);
    }
});

client.getExtraBroadcasts(
    Format.Json,
    undefined,
    undefined
).then(response => {

    console.log("*** Got " + response.broadcasts.length + " broadcasts.");

    for (let i = 0; i < response.broadcasts.length; i++) {
        const program = response.broadcasts[i];

        console.log();
        console.log("id: " + program.id);
        console.log("channel.id: " + program.channel?.id);
        console.log("channel.name: " + program.channel?.name);
        console.log("description: " + program.description);
        console.log("liveaudio.url: " + program.liveaudio?.url);
        console.log("liveaudio.statkey: " + program.liveaudio?.statkey);
        console.log("localstarttime: " + program.localstarttime);
        console.log("localstoptime: " + program.localstoptime);
        console.log("mobileliveaudio.url: " + program.mobileliveaudio?.url);
        console.log("mobileliveaudio.statkey: " + program.mobileliveaudio?.statkey);
        console.log("name: " + program.name);
        console.log("publisher.id: " + program.publisher?.id);
        console.log("publisher.name: " + program.publisher?.name);
        console.log("sport: " + program.sport);
    }
});

client.getScheduledEpisodesForChannel(
    Format.Json,
    undefined,
    undefined,
    testChannelId,
    undefined
).then(response => {

    console.log("*** Got " + response.schedule.length + " schedule.");

    for (let i = 0; i < response.schedule.length; i++) {
        const scheduledEpisode = response.schedule[i];

        console.log();
        console.log("episodeid: " + scheduledEpisode.episodeid);
        console.log("channel.id: " + scheduledEpisode.channel?.id);
        console.log("channel.name: " + scheduledEpisode.channel?.name);
        console.log("description: " + scheduledEpisode.description);
        console.log("endtimeutc: " + scheduledEpisode.endtimeutc);
        console.log("imageurl: " + scheduledEpisode.imageurl);
        console.log("imageurltemplate: " + scheduledEpisode.imageurltemplate);
        console.log("program.id: " + scheduledEpisode.program?.id);
        console.log("program.name: " + scheduledEpisode.program?.name);
        console.log("starttimeutc: " + scheduledEpisode.starttimeutc);
        console.log("title: " + scheduledEpisode.title);
    }
});

client.getScheduledEpisodesForProgram(
    Format.Json,
    undefined,
    undefined,
    testProgramId,
    new Date(2020, 1, 1),
    new Date(2021, 1, 1)
).then(response => {

    console.log("*** Got " + response.schedule.length + " schedule.");

    for (let i = 0; i < response.schedule.length; i++) {
        const scheduledEpisode = response.schedule[i];

        console.log();
        console.log("episodeid: " + scheduledEpisode.episodeid);
        console.log("channel.id: " + scheduledEpisode.channel?.id);
        console.log("channel.name: " + scheduledEpisode.channel?.name);
        console.log("description: " + scheduledEpisode.description);
        console.log("endtimeutc: " + scheduledEpisode.endtimeutc);
        console.log("imageurl: " + scheduledEpisode.imageurl);
        console.log("imageurltemplate: " + scheduledEpisode.imageurltemplate);
        console.log("program.id: " + scheduledEpisode.program?.id);
        console.log("program.name: " + scheduledEpisode.program?.name);
        console.log("starttimeutc: " + scheduledEpisode.starttimeutc);
        console.log("title: " + scheduledEpisode.title);
    }
});

client.getEpisodesRightNowAllChannels(
    Format.Json,
    undefined,
    undefined
).then(response => {

    console.log("*** Got " + response.channels.length + " channels.");

    for (let i = 0; i < response.channels.length; i++) {
        const channel = response.channels[i];

        console.log();
        console.log("id: " + channel.id);
        console.log("name: " + channel.name);
        console.log("previousscheduledepisode.description: " + channel.previousscheduledepisode?.description);
        console.log("previousscheduledepisode.endtimeutc: " + channel.previousscheduledepisode?.endtimeutc);
        console.log("previousscheduledepisode.episodeid;: " + channel.previousscheduledepisode?.episodeid);
        console.log("previousscheduledepisode.program.id: " + channel.previousscheduledepisode?.program?.id);
        console.log("previousscheduledepisode.program.name: " + channel.previousscheduledepisode?.program?.name);
        console.log("previousscheduledepisode.socialimage: " + channel.previousscheduledepisode?.socialimage);
        console.log("previousscheduledepisode.starttimeut: " + channel.previousscheduledepisode?.starttimeutc);
        console.log("previousscheduledepisode.title: " + channel.previousscheduledepisode?.title);

        console.log("currentscheduledepisode.description: " + channel.currentscheduledepisode?.description);
        console.log("currentscheduledepisode.endtimeutc: " + channel.currentscheduledepisode?.endtimeutc);
        console.log("currentscheduledepisode.episodeid;: " + channel.currentscheduledepisode?.episodeid);
        console.log("currentscheduledepisode.program.id: " + channel.currentscheduledepisode?.program?.id);
        console.log("currentscheduledepisode.program.name: " + channel.currentscheduledepisode?.program?.name);
        console.log("currentscheduledepisode.socialimage: " + channel.currentscheduledepisode?.socialimage);
        console.log("currentscheduledepisode.starttimeut: " + channel.currentscheduledepisode?.starttimeutc);
        console.log("currentscheduledepisode.title: " + channel.currentscheduledepisode?.title);

        console.log("nextscheduledepisode.description: " + channel.nextscheduledepisode?.description);
        console.log("nextscheduledepisode.endtimeutc: " + channel.nextscheduledepisode?.endtimeutc);
        console.log("nextscheduledepisode.episodeid;: " + channel.nextscheduledepisode?.episodeid);
        console.log("nextscheduledepisode.program.id: " + channel.nextscheduledepisode?.program?.id);
        console.log("nextscheduledepisode.program.name: " + channel.nextscheduledepisode?.program?.name);
        console.log("nextscheduledepisode.socialimage: " + channel.nextscheduledepisode?.socialimage);
        console.log("nextscheduledepisode.starttimeut: " + channel.nextscheduledepisode?.starttimeutc);
        console.log("nextscheduledepisode.title: " + channel.nextscheduledepisode?.title);
    }
});

client.getEpisodesRightNowForChannel(
    Format.Json,
    testChannelId
).then(response => {

        const channel = response.channel;

        console.log();
        console.log("id: " + channel.id);
        console.log("name: " + channel.name);
        console.log("previousscheduledepisode.description: " + channel.previousscheduledepisode?.description);
        console.log("previousscheduledepisode.endtimeutc: " + channel.previousscheduledepisode?.endtimeutc);
        console.log("previousscheduledepisode.episodeid;: " + channel.previousscheduledepisode?.episodeid);
        console.log("previousscheduledepisode.program.id: " + channel.previousscheduledepisode?.program?.id);
        console.log("previousscheduledepisode.program.name: " + channel.previousscheduledepisode?.program?.name);
        console.log("previousscheduledepisode.socialimage: " + channel.previousscheduledepisode?.socialimage);
        console.log("previousscheduledepisode.starttimeut: " + channel.previousscheduledepisode?.starttimeutc);
        console.log("previousscheduledepisode.title: " + channel.previousscheduledepisode?.title);

        console.log("currentscheduledepisode.description: " + channel.currentscheduledepisode?.description);
        console.log("currentscheduledepisode.endtimeutc: " + channel.currentscheduledepisode?.endtimeutc);
        console.log("currentscheduledepisode.episodeid;: " + channel.currentscheduledepisode?.episodeid);
        console.log("currentscheduledepisode.program.id: " + channel.currentscheduledepisode?.program?.id);
        console.log("currentscheduledepisode.program.name: " + channel.currentscheduledepisode?.program?.name);
        console.log("currentscheduledepisode.socialimage: " + channel.currentscheduledepisode?.socialimage);
        console.log("currentscheduledepisode.starttimeut: " + channel.currentscheduledepisode?.starttimeutc);
        console.log("currentscheduledepisode.title: " + channel.currentscheduledepisode?.title);

        console.log("nextscheduledepisode.description: " + channel.nextscheduledepisode?.description);
        console.log("nextscheduledepisode.endtimeutc: " + channel.nextscheduledepisode?.endtimeutc);
        console.log("nextscheduledepisode.episodeid;: " + channel.nextscheduledepisode?.episodeid);
        console.log("nextscheduledepisode.program.id: " + channel.nextscheduledepisode?.program?.id);
        console.log("nextscheduledepisode.program.name: " + channel.nextscheduledepisode?.program?.name);
        console.log("nextscheduledepisode.socialimage: " + channel.nextscheduledepisode?.socialimage);
        console.log("nextscheduledepisode.starttimeut: " + channel.nextscheduledepisode?.starttimeutc);
        console.log("nextscheduledepisode.title: " + channel.nextscheduledepisode?.title);
});


client.getLastPublishedShows(
    Format.Json,
    undefined,
    undefined,
    undefined
).then(response => {

    console.log("*** Got " + response.shows.length + " shows.");

    for (let i = 0; i < response.shows.length; i++) {
        const show = response.shows[i];

        console.log();
        console.log("id: " + show.id);
        console.log("name: " + show.title);
        console.log("broadcast.availablestoputc: " + show.broadcast?.availablestoputc);
        console.log("broadcast.broadcastfiles.length: " + show.broadcast?.broadcastfiles?.length);
        console.log("broadcast.playlist.duration: " + show.broadcast?.playlist?.duration);
        console.log("broadcast.playlist.id: " + show.broadcast?.playlist?.id);
        console.log("broadcast.playlist.publishdateutc: " + show.broadcast?.playlist?.publishdateutc);
        console.log("broadcast.playlist.statkey: " + show.broadcast?.playlist?.statkey);
        console.log("broadcast.playlist.url: " + show.broadcast?.playlist?.url);

        console.log("description: " + show.description);
        console.log("endtimeutc: " + show.endtimeutc);
        console.log("imageurl: " + show.imageurl);
        console.log("imageurltemplate: " + show.imageurltemplate);
        console.log("program.id: " + show.program?.id);
        console.log("program.name: " + show.program?.name);
        console.log("starttimeutc: " + show.starttimeutc);
    }
});

client.getImportantMessages(
    Format.Json,
).then(response => {

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

client.getTrafficAreas(
    Format.Json,
    undefined,
    undefined
).then(response => {

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


client.getTrafficArea(
    Format.Json,
    3.123,
    -78.5345
).then(response => {
    const area = response.area;

    console.log();
    console.log("name: " + area.name);
    console.log("radius: " + area.radius);
    console.log("trafficdepartmentunitid: " + area.trafficdepartmentunitid);
    console.log("zoom: " + area.zoom);
});


client.getTrafficMessages(
    Format.Json,
    undefined,
    undefined,
    undefined
).then(response => {

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
