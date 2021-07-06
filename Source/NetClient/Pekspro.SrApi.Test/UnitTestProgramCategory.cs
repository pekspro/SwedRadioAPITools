using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Pekspro.SrApi.Test
{
    public class UnitTestProgramCategory
    {
        [Fact]
        public async Task TestGetProgramCategoriesAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var programsCategoriesResponse = await client.GetProgramCategoriesAsync(Format.Json, null, null);

            // Assert
            Assert.NotNull(programsCategoriesResponse.Copyright);
            Assert.NotNull(programsCategoriesResponse.Pagination);
            Assert.Equal(1, programsCategoriesResponse.Pagination.Page);
            Assert.NotEmpty(programsCategoriesResponse.Programcategories);

            var programCategory = programsCategoriesResponse.Programcategories.First();

            Assert.NotEmpty(programCategory.Name);
        }

        [Fact]
        public async Task TestGetProgramCategoriesPaginationAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var programsCategoriesResponse1 = await client.GetProgramCategoriesAsync(Format.Json, 1, 3);
            var programsCategoriesResponse2 = await client.GetProgramCategoriesAsync(Format.Json, 2, 3);

            // Assert
            Assert.Equal(1, programsCategoriesResponse1.Pagination.Page);
            Assert.Equal(3, programsCategoriesResponse1.Pagination.Size);
            Assert.Equal(2, programsCategoriesResponse2.Pagination.Page);
            Assert.Equal(3, programsCategoriesResponse2.Pagination.Size);
            Assert.True(programsCategoriesResponse1.Programcategories.Last().Id < programsCategoriesResponse2.Programcategories.First().Id);
        }

        private const int TestProgramCategory = 133;

        [Fact]
        public async Task TestGetProgramCategoryAsync()
        {
            // Arrange
            var client = TestTools.CreateClient();

            // Act
            var programCategory = await client.GetProgramCategoryAsync(Format.Json, TestProgramCategory);

            // Assert
            Assert.NotNull(programCategory.Copyright);
            Assert.NotNull(programCategory.Programcategory);
            Assert.Equal(TestProgramCategory, TestProgramCategory);
        }
    }
}
