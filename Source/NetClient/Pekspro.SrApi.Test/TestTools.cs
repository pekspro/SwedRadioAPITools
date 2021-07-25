namespace Pekspro.SrApi.Test
{
    public class TestTools
    {
        public const int MaxPagingSize = 10000;

        static public SrApiClient CreateClient()
        {
            return new SrApiClient(new System.Net.Http.HttpClient());
        }
    }
}
