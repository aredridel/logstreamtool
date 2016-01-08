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
* `--count period` Count the occurances of each key in the period.

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


