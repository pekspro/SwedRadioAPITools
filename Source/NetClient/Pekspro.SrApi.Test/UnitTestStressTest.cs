using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    //These tests takes a lot of time and should only be executed manually.
    //public class UnitTestStressTest
    //{
    //    [Fact]
    //    public async Task TestGetAllChannelsAndScheduleEpisodesAsync()
    //    {
    //        // Arrange
    //        var client = TestTools.CreateClient();

    //        // Act
    //        var channels = await GetAllChannelsAsync(client);

    //        for(int dayOffset = -1; dayOffset < 2; dayOffset++)
    //        {
    //            DateTimeOffset date = DateTimeOffset.UtcNow.AddDays(dayOffset);

    //            foreach(var channel in channels)
    //            {
    //                if(channel.Name == "SR Extra15")
    //                {
    //                    continue;
    //                }


    //                int page = 1;
    //                int totalPageCount = 1;

    //                while(page <= totalPageCount)
    //                {
    //                    System.Diagnostics.Debug.WriteLine($"Get schedules episodes for channel {channel.Name} ({channel.Id}), {date.UtcDateTime.ToShortDateString()}, page {page}");

    //                    var response = await client.GetScheduledEpisodesForChannelAsync(Format.Json, page, TestTools.MaxPagingSize, channel.Id, date);

    //                    totalPageCount = response.Pagination.Totalpages;
    //                    page++;

    //                    Assert.True(response.Pagination.Size <= TestTools.MaxPagingSize);
    //                }
    //            }
    //        }
    //    }

    //    [Fact]
    //    public async Task TestGetAllProgramsAndEpisodesAndPlaylistAsync()
    //    {
    //        // Arrange
    //        var client = TestTools.CreateClient();

    //        // Act
    //        var programs = await GetAllPrograms(client);

    //        foreach (var program in programs)
    //        {
    //            var episodes = await GetAllEpisodesAsync(client, program);

    //            foreach(var episode in episodes)
    //            {
    //                await client.GetPlaylistByEpisodeAsync(Format.Json, episode.Id);
    //            }
    //        }
    //    }

    //    [Fact]
    //    public async Task TestGetAllProgramsAndScheduleEpisodesAsync()
    //    {
    //        // Arrange
    //        var client = TestTools.CreateClient();

    //        // Act
    //        var programs = await GetAllPrograms(client);

    //        for (int dayOffset = -1; dayOffset < 2; dayOffset++)
    //        {
    //            DateTimeOffset date = DateTimeOffset.UtcNow.AddDays(dayOffset);

    //            foreach (var program in programs)
    //            {
    //                int page = 1;
    //                int totalPageCount = 1;

    //                while (page <= totalPageCount)
    //                {
    //                    System.Diagnostics.Debug.WriteLine($"Get schedules episodes for program {program.Name} ({program.Id}), {date.UtcDateTime.ToShortDateString()}, page {page}");

    //                    var response = await client.GetScheduledEpisodesForProgramAsync(Format.Json, page, TestTools.MaxPagingSize, program.Id, date, date.AddDays(1));

    //                    totalPageCount = response.Pagination.Totalpages;
    //                    page++;

    //                    Assert.True(response.Pagination.Size <= TestTools.MaxPagingSize);
    //                }
    //            }
    //        }
    //    }

    //    private async Task<ICollection<Channel>> GetAllChannelsAsync(SrApiClient client)
    //    {
    //        List<Channel> channels = new List<Channel>();
    //        int page = 1;
    //        int totalPageCount = 1;

    //        while (page <= totalPageCount)
    //        {
    //            var response = await client.GetChannelsAsync(Format.Json, page, TestTools.MaxPagingSize, null, null, null);
    //            channels.AddRange(response.Channels);

    //            totalPageCount = response.Pagination.Totalpages;
    //            page++;

    //            Assert.True(response.Pagination.Size <= TestTools.MaxPagingSize);
    //        }

    //        return channels;
    //    }

    //    private async Task<ICollection<Program>> GetAllPrograms(SrApiClient client)
    //    {
    //        List<Program> programs = new List<Program>();
    //        int page = 1;
    //        int totalPageCount = 1;

    //        while (page <= totalPageCount)
    //        {
    //            var response = await client.GetProgramsAsync(Format.Json, page, TestTools.MaxPagingSize, null, null);
    //            programs.AddRange(response.Programs);

    //            totalPageCount = response.Pagination.Totalpages;
    //            page++;

    //            Assert.True(response.Pagination.Size <= TestTools.MaxPagingSize);
    //        }

    //        return programs;
    //    }

    //    private async Task<ICollection<Episode>> GetAllEpisodesAsync(SrApiClient client, Program program)
    //    {
    //        List<Episode> episodes = new List<Episode>();
    //        int page = 1;
    //        int totalPageCount = 1;

    //        while (page <= totalPageCount)
    //        {
    //            System.Diagnostics.Debug.WriteLine($"Getting all episodes for program {program.Name} ({program.Id}), page {page}");

    //            var response = await client.GetEpisodesAsync(Format.Json, page, TestTools.MaxPagingSize, program.Id, null, null, null);
    //            episodes.AddRange(response.Episodes);

    //            totalPageCount = response.Pagination.Totalpages;
    //            page++;

    //            Assert.True(response.Pagination.Size <= TestTools.MaxPagingSize);
    //        }

    //        return episodes;
    //    }
    //}
}
