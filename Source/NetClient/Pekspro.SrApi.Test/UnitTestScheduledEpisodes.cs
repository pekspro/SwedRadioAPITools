using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestScheduledEpisodes
    {
        private const int TestChannelId = 164;
        private const int TestProgramId = 516;

        [Fact]
        public async Task TestGetScheduledEpisodesForChannelAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var scheduleResponse = await client.GetScheduledEpisodesForChannelAsync(Format.Json, null, null, TestChannelId, null);

            // Assert
            Assert.NotNull(scheduleResponse.Copyright);
            Assert.NotNull(scheduleResponse.Pagination);
            Assert.Equal(1, scheduleResponse.Pagination.Page);
            Assert.NotEmpty(scheduleResponse.Schedule);

            var schedule = scheduleResponse.Schedule.First();

            Assert.NotEmpty(schedule.Channel.Name);
            Assert.NotEmpty(schedule.Program.Name);
            Assert.NotEmpty(schedule.Imageurl);
            Assert.NotEmpty(schedule.Imageurltemplate);
            Assert.NotEmpty(schedule.Title);
        }

        [Fact]
        public async Task TestGetChannelsPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var scheduleResponse1 = await client.GetScheduledEpisodesForChannelAsync(Format.Json, 1, 3, TestChannelId, null);
            var scheduleResponse2 = await client.GetScheduledEpisodesForChannelAsync(Format.Json, 2, 3, TestChannelId, null);

            // Assert
            Assert.Equal(1, scheduleResponse1.Pagination.Page);
            Assert.Equal(3, scheduleResponse1.Pagination.Size);
            Assert.Equal(2, scheduleResponse2.Pagination.Page);
            Assert.Equal(3, scheduleResponse2.Pagination.Size);
            Assert.True(scheduleResponse1.Schedule.Last().Starttimeutc < scheduleResponse2.Schedule.First().Starttimeutc);
        }


        [Fact]
        public async Task TestGetChannelsForDateAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            DateTimeOffset dateTimeOffset = new DateTimeOffset(new DateTime(2021, 4, 5), TimeSpan.Zero);

            // Act
            var scheduleResponse = await client.GetScheduledEpisodesForChannelAsync(Format.Json, null, null, TestChannelId, dateTimeOffset);

            // Assert
            Assert.Contains(scheduleResponse.Schedule, a => a.Starttimeutc.UtcDateTime == dateTimeOffset.UtcDateTime.Date);
        }

        [Fact]
        public async Task TestGetScheduledEpisodesForProgramAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var scheduleResponse = await client.GetScheduledEpisodesForProgramAsync(Format.Json, null, null, TestProgramId, null, null);

            // Assert
            Assert.NotNull(scheduleResponse.Copyright);
            Assert.NotNull(scheduleResponse.Pagination);
            Assert.Equal(1, scheduleResponse.Pagination.Page);
            Assert.NotNull(scheduleResponse.Schedule);
        }

        [Fact]
        public async Task TestGetScheduledEpisodesForProgramWithDateFilterAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            DateTimeOffset fromDate = new DateTimeOffset(new DateTime(2020, 1, 1), TimeSpan.Zero);
            DateTimeOffset toDate = new DateTimeOffset(new DateTime(2021, 1, 1), TimeSpan.Zero);

            // Act
            var scheduleResponse = await client.GetScheduledEpisodesForProgramAsync(Format.Json, null, null, TestProgramId, fromDate.DateTime, toDate.DateTime);

            // Assert
            Assert.NotNull(scheduleResponse.Copyright);
            Assert.NotNull(scheduleResponse.Pagination);
            Assert.Equal(1, scheduleResponse.Pagination.Page);
            Assert.NotEmpty(scheduleResponse.Schedule);

            Assert.DoesNotContain(scheduleResponse.Schedule, a => a.Starttimeutc < fromDate.AddDays(-1));
            Assert.DoesNotContain(scheduleResponse.Schedule, a => a.Starttimeutc > toDate.AddDays(-1));

            var schedule = scheduleResponse.Schedule.First();

            Assert.NotEmpty(schedule.Channel.Name);
            Assert.NotEmpty(schedule.Program.Name);
            Assert.NotEmpty(schedule.Imageurl);
            Assert.NotEmpty(schedule.Imageurltemplate);
            Assert.NotEmpty(schedule.Title);
            
        }

        [Fact]
        public async Task TestGetScheduledEpisodesForProgramPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            DateTimeOffset fromDate = new DateTimeOffset(new DateTime(2020, 1, 1), TimeSpan.Zero);
            DateTimeOffset toDate = new DateTimeOffset(new DateTime(2021, 1, 1), TimeSpan.Zero);

            // Act
            var scheduleResponse1 = await client.GetScheduledEpisodesForProgramAsync(Format.Json, 1, 3, TestProgramId, fromDate.DateTime, toDate.DateTime);
            var scheduleResponse2 = await client.GetScheduledEpisodesForProgramAsync(Format.Json, 2, 3, TestProgramId, fromDate.DateTime, toDate.DateTime);

            // Assert
            Assert.Equal(1, scheduleResponse1.Pagination.Page);
            Assert.Equal(3, scheduleResponse1.Pagination.Size);
            Assert.Equal(2, scheduleResponse2.Pagination.Page);
            Assert.Equal(3, scheduleResponse2.Pagination.Size);
            Assert.True(scheduleResponse1.Schedule.Last().Starttimeutc < scheduleResponse2.Schedule.First().Starttimeutc);
        }

        [Fact]
        public async Task TestGetEpisodesRightNowAllChannelsAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var scheduleResponse = await client.GetEpisodesRightNowAllChannelsAsync(Format.Json, null, null);

            // Assert
            Assert.NotNull(scheduleResponse.Copyright);
            Assert.NotNull(scheduleResponse.Pagination);
            Assert.Equal(1, scheduleResponse.Pagination.Page);
            Assert.NotEmpty(scheduleResponse.Channels);
        }

        [Fact]
        public async Task TestGetEpisodesRightNowAllChannelsWithSizeAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var scheduleResponse = await client.GetEpisodesRightNowAllChannelsAsync(Format.Json, null, 50);

            // Assert
            Assert.NotNull(scheduleResponse.Copyright);
            Assert.NotNull(scheduleResponse.Pagination);
            Assert.Equal(1, scheduleResponse.Pagination.Page);
            Assert.Equal(50, scheduleResponse.Channels.Count);
 
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Name));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Nextscheduledepisode?.Description));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Nextscheduledepisode?.Socialimage));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Nextscheduledepisode?.Program?.Name));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Nextscheduledepisode?.Title));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Currentscheduledepisode?.Description));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Currentscheduledepisode?.Socialimage));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Currentscheduledepisode?.Program?.Name));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Currentscheduledepisode?.Title));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Previousscheduledepisode?.Description));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Previousscheduledepisode?.Socialimage));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Previousscheduledepisode?.Program?.Name));
            Assert.Contains(scheduleResponse.Channels, a => !string.IsNullOrEmpty(a.Previousscheduledepisode?.Title));
        }

        [Fact]
        public async Task TestGetEpisodesRightNowForChannelAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var scheduleResponse = await client.GetEpisodesRightNowForChannelAsync(Format.Json, TestChannelId);

            // Assert
            Assert.NotNull(scheduleResponse.Copyright);
            Assert.NotNull(scheduleResponse.Channel);
            Assert.NotEmpty(scheduleResponse.Channel.Name);
            Assert.NotNull(scheduleResponse.Channel.Previousscheduledepisode);
            Assert.NotNull(scheduleResponse.Channel.Currentscheduledepisode);
            Assert.NotNull(scheduleResponse.Channel.Nextscheduledepisode);

            Assert.NotEmpty(scheduleResponse.Channel.Previousscheduledepisode.Description);
            Assert.NotEmpty(scheduleResponse.Channel.Previousscheduledepisode.Title);
            Assert.NotEmpty(scheduleResponse.Channel.Previousscheduledepisode.Program.Name);

            Assert.NotEmpty(scheduleResponse.Channel.Currentscheduledepisode.Description);
            Assert.NotEmpty(scheduleResponse.Channel.Currentscheduledepisode.Title);
            Assert.NotEmpty(scheduleResponse.Channel.Currentscheduledepisode.Program.Name);

            Assert.NotEmpty(scheduleResponse.Channel.Nextscheduledepisode.Description);
            Assert.NotEmpty(scheduleResponse.Channel.Nextscheduledepisode.Title);
            Assert.NotEmpty(scheduleResponse.Channel.Nextscheduledepisode.Program.Name);
        }
    }
}
