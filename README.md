logstreamtool
=============

Process (json stream) logs in a streaming fashion, doing analyses like summing
numbers of events.

Use
-----

```shell
logstreamtool [--bole] [--sum hour] < logfile
```

### Flags

* `--bole` Process timestamps in the `time` field and parse them as ISO8601 dates.
* `--sum period` Sum the values of each field in the period.
* `--mean period` Take the mean of the values in each period.
* `--mode period` Take the mode of the values in each period.
* `--median period` Take the median of the values in each period.
* `--variance period` Take the variance of the values in each period.
* `--stdev period` Take the standard deviation of the values in each period.
* `--min period` Take the minimum value in each period.
* `--max period` Take the maximum value in each period.
* `--count period` Count the occurances of each key in the period.
* `--first period` Take the first value in each period.
* `--last period` Take the last value in each period.
* `--sample period` Take a random value from each period.

### Periods

Any period accepted by [`floordate`](https://npmjs.com/packages/floordate) should work.

* s, sec, secs, second, seconds
* m, min, mins, minute, minutes
* h, hr, hrs, hour, hours
* d, day, days
* w, wk, wks, week, weeks
* M, mon, mons, month, months
* q, qtr, qtrs, quarter, quarters
* y, yr, yrs, year, years

Examples
--------

```shell
logstreamtool --bole --sum minute < logfile
```

Read a log file written by [`bole`](https://npmjs.com/packages/bole), and sum
the values of each field over each minute.


