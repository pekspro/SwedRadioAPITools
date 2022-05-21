using System;
using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

namespace Pekspro.SrApi
{
    //sealed class UnixEpochDateTimeOffsetConverter : JsonConverter<DateTimeOffset>
    //{
    //    static readonly DateTimeOffset s_epoch = new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero);
    //    static readonly Regex s_regex = new Regex("^/Date\\(([+-]*\\d+)([+-])(\\d{2})(\\d{2})\\)/$", RegexOptions.CultureInvariant);

    //    public override DateTimeOffset Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    //    {

    //        string formatted = reader.GetString()!;
    //        Match match = s_regex.Match(formatted);

    //        if (
    //                !match.Success
    //                || !long.TryParse(match.Groups[1].Value, System.Globalization.NumberStyles.Integer, CultureInfo.InvariantCulture, out long unixTime)
    //                || !int.TryParse(match.Groups[3].Value, System.Globalization.NumberStyles.Integer, CultureInfo.InvariantCulture, out int hours)
    //                || !int.TryParse(match.Groups[4].Value, System.Globalization.NumberStyles.Integer, CultureInfo.InvariantCulture, out int minutes))
    //        {
    //            throw new JsonException();
    //        }

    //        int sign = match.Groups[2].Value[0] == '+' ? 1 : -1;
    //        TimeSpan utcOffset = new TimeSpan(hours * sign, minutes * sign, 0);

    //        return s_epoch.AddMilliseconds(unixTime).ToOffset(utcOffset);
    //    }

    //    public override void Write(Utf8JsonWriter writer, DateTimeOffset value, JsonSerializerOptions options)
    //    {
    //        long unixTime = Convert.ToInt64((value - s_epoch).TotalMilliseconds);
    //        TimeSpan utcOffset = value.Offset;

    //        string formatted = FormattableString.Invariant($"/Date({unixTime}{(utcOffset >= TimeSpan.Zero ? "+" : "-")}{utcOffset:hhmm})/");
    //        writer.WriteStringValue(formatted);
    //    }
    //}


    sealed class UnixEpochDateTimeOffsetConverter : JsonConverter<DateTimeOffset>
    {
        static readonly DateTimeOffset s_epoch = new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero);
        static readonly Regex s_regex = new Regex("^/Date\\(([+-]*\\d+)([+-])(\\d{2})(\\d{2})\\)/$", RegexOptions.CultureInvariant);

        //static readonly DateTime s_epoch_simple = new DateTime(1970, 1, 1, 0, 0, 0);
        static readonly Regex s_regex_simple = new Regex("^/Date\\(([+-]*\\d+)\\)/$", RegexOptions.CultureInvariant);

        public override DateTimeOffset Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            string formatted = reader.GetString()!;
            Match match = s_regex.Match(formatted);

            if (
                    !match.Success
                    || !long.TryParse(match.Groups[1].Value, System.Globalization.NumberStyles.Integer, CultureInfo.InvariantCulture, out long unixTime)
                    || !int.TryParse(match.Groups[3].Value, System.Globalization.NumberStyles.Integer, CultureInfo.InvariantCulture, out int hours)
                    || !int.TryParse(match.Groups[4].Value, System.Globalization.NumberStyles.Integer, CultureInfo.InvariantCulture, out int minutes))
            {

                match = s_regex_simple.Match(formatted);

                if (
                        !match.Success
                        || !long.TryParse(match.Groups[1].Value, System.Globalization.NumberStyles.Integer, CultureInfo.InvariantCulture, out unixTime))
                {
                    throw new JsonException();
                }

                return s_epoch.AddMilliseconds(unixTime);

            }

            int sign = match.Groups[2].Value[0] == '+' ? 1 : -1;
            TimeSpan utcOffset = new TimeSpan(hours * sign, minutes * sign, 0);

            return s_epoch.AddMilliseconds(unixTime).ToOffset(utcOffset);
        }

        public override void Write(Utf8JsonWriter writer, DateTimeOffset value, JsonSerializerOptions options)
        {
            long unixTime = Convert.ToInt64((value - s_epoch).TotalMilliseconds);
            TimeSpan utcOffset = value.Offset;

            string formatted = FormattableString.Invariant($"/Date({unixTime}{(utcOffset >= TimeSpan.Zero ? "+" : "-")}{utcOffset:hhmm})/");
            writer.WriteStringValue(formatted);
        }
    }

    /*
    sealed class UnixEpochDateTimeConverter : JsonConverter<DateTime>
    {
        static readonly DateTime s_epoch = new DateTime(1970, 1, 1, 0, 0, 0);
        static readonly Regex s_regex = new Regex("^/Date\\(([+-]*\\d+)\\)/$", RegexOptions.CultureInvariant);

        public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {

            string formatted = reader.GetString()!;
            Match match = s_regex.Match(formatted);

            if (
                    !match.Success
                    || !long.TryParse(match.Groups[1].Value, System.Globalization.NumberStyles.Integer, CultureInfo.InvariantCulture, out long unixTime))
            {
                throw new JsonException();
            }

            return s_epoch.AddMilliseconds(unixTime);
        }

        public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
        {
            long unixTime = Convert.ToInt64((value - s_epoch).TotalMilliseconds);

            string formatted = FormattableString.Invariant($"/Date({unixTime})/");
            writer.WriteStringValue(formatted);
        }
    }
    */
}
