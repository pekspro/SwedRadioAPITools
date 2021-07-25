using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestImportantMessages
    {
        [Fact]
        public async Task TestGetImportantMessagesAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var importantMessagesResponse = await client.GetImportantMessagesAsync(Format.Json);

            // Assert
            Assert.NotNull(importantMessagesResponse.Copyright);
            Assert.NotNull(importantMessagesResponse.Messages);
        }
    }
}
