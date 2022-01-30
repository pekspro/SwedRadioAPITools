using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestChannel
    {
        [Fact]
        public async Task TestGetChannelsAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var channelsResponse = await client.GetChannelsAsync(Format.Json, null, null, null, null, null);

            // Assert
            Assert.NotNull(channelsResponse.Copyright);
            Assert.NotNull(channelsResponse.Pagination);
            Assert.Equal(1, channelsResponse.Pagination.Page);
            Assert.NotEmpty(channelsResponse.Channels);

            var channel = channelsResponse.Channels.First();

            Assert.NotEmpty(channel.Channeltype);
            Assert.NotEmpty(channel.Color);
            Assert.NotEmpty(channel.Image);
            Assert.NotEmpty(channel.Imagetemplate);
            Assert.NotEmpty(channel.Liveaudio!.Url);
            Assert.NotEmpty(channel.Name);
            Assert.NotEmpty(channel.Scheduleurl);
            Assert.NotEmpty(channel.Siteurl);
            Assert.NotEmpty(channel.Tagline);
            Assert.NotEmpty(channel.Xmltvid);
        }

        [Fact]
        public async Task TestGetChannelsPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var channelsResponse1 = await client.GetChannelsAsync(Format.Json, 1, 3, null, null, null);
            var channelsResponse2 = await client.GetChannelsAsync(Format.Json, 2, 3, null, null, null);

            // Assert
            Assert.Equal(1, channelsResponse1.Pagination.Page);
            Assert.Equal(3, channelsResponse1.Pagination.Size);
            Assert.Equal(2, channelsResponse2.Pagination.Page);
            Assert.Equal(3, channelsResponse2.Pagination.Size);
            Assert.True(channelsResponse1.Channels.Last().Id < channelsResponse2.Channels.First().Id);
        }

        [Theory]
        [InlineData(ChannelSort.Id)]
        [InlineData(ChannelSort.Id_desc)]
        [InlineData(ChannelSort.Name)]
        [InlineData(ChannelSort.Name_desc)]
        public async Task TestGetChannelsWithSortAsync(ChannelSort channelSort)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var channelsResponse = await client.GetChannelsAsync(Format.Json, null, null, channelSort, null, null);

            // Assert
            var first = channelsResponse.Channels.First();
            var second = channelsResponse.Channels.Skip(1).First();

            if(channelSort == ChannelSort.Id)
            {
                Assert.True(first.Id < second.Id);
            }
            else if(channelSort == ChannelSort.Id_desc)
            {
                Assert.True(first.Id > second.Id);
            }
            else if (channelSort == ChannelSort.Name)
            {
                Assert.True(first.Name.CompareTo(second.Name) < 0);
            }
            else if (channelSort == ChannelSort.Name_desc)
            {
                Assert.True(first.Name.CompareTo(second.Name) > 0);
            }
        }

        [Theory]
        [InlineData(2, "mp3")]
        [InlineData(5, "aac-http")]
        [InlineData(10, "hls")]
        public async Task TestGetChannelsWithAudioTemplateAsync(int templateId, string expectedExtension)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var channelsResponse = await client.GetChannelsAsync(Format.Json, null, null, null, templateId, null);

            // Assert
            var channel = channelsResponse.Channels.First();

            Assert.EndsWith(expectedExtension, channel.Liveaudio!.Url);
        }

        [Theory]
        [InlineData(AudioQuality.Lo, "lo.mp3")]
        [InlineData(AudioQuality.Normal, ".mp3")]
        [InlineData(AudioQuality.Hi, "hi.mp3")]
        public async Task TestGetChannelsWithQualityAsync(AudioQuality audioQuality, string expectedExtension)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var channelsResponse = await client.GetChannelsAsync(Format.Json, null, null, null, null, audioQuality);

            // Assert
            var channel = channelsResponse.Channels.First();

            Assert.EndsWith(expectedExtension, channel.Liveaudio!.Url);
        }

        private const int TestChannelId = 132;

        [Fact]
        public async Task TestGetChannelAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var channel = await client.GetChannelAsync(Format.Json, TestChannelId, null, null);

            // Assert
            Assert.NotNull(channel.Copyright);
            Assert.NotNull(channel.Channel);
            Assert.Equal(TestChannelId, channel.Channel.Id);
        }

        [Theory]
        [InlineData(2, "mp3")]
        [InlineData(5, "aac-http")]
        [InlineData(10, "hls")]
        public async Task TestGetChannelWithAudioTemplateAsync(int templateId, string expectedExtension)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var channelResponse = await client.GetChannelAsync(Format.Json, TestChannelId, templateId, null);

            // Assert
            var channel = channelResponse.Channel;

            Assert.EndsWith(expectedExtension, channel.Liveaudio!.Url);
        }

        [Theory]
        [InlineData(AudioQuality.Lo, "lo.mp3")]
        [InlineData(AudioQuality.Normal, ".mp3")]
        [InlineData(AudioQuality.Hi, "hi.mp3")]
        public async Task TestGetChannelWithQualityAsync(AudioQuality audioQuality, string expectedExtension)
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var channelsResponse = await client.GetChannelAsync(Format.Json, TestChannelId, null, audioQuality);

            // Assert
            var channel = channelsResponse.Channel;

            Assert.EndsWith(expectedExtension, channel.Liveaudio!.Url);
        }

    }
}
