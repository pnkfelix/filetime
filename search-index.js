var searchIndex = {};
searchIndex["filetime"] = {"doc":"Timestamps for files in Rust","items":[[3,"FileTime","filetime","A helper structure to represent a timestamp for a file.",null,null],[5,"set_file_times","","Set the last access and modification times for a file on the filesystem.",null,{"inputs":[{"name":"p"},{"name":"filetime"},{"name":"filetime"}],"output":{"name":"result"}}],[5,"set_symlink_file_times","","Set the last access and modification times for a file on the filesystem. This function does not follow symlink.",null,{"inputs":[{"name":"p"},{"name":"filetime"},{"name":"filetime"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"filetime"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"filetime"}],"output":{"name":"bool"}}],[11,"cmp","","",0,{"inputs":[{"name":"self"},{"name":"filetime"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"filetime"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"self"},{"name":"filetime"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"self"},{"name":"filetime"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"self"},{"name":"filetime"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"self"},{"name":"filetime"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"filetime"}}],[11,"hash","","",0,null],[11,"zero","","Creates a new timestamp representing a 0 time.",0,{"inputs":[],"output":{"name":"filetime"}}],[11,"from_seconds_since_1970","","Creates a new instance of `FileTime` with a number of seconds and nanoseconds relative to January 1, 1970.",0,{"inputs":[{"name":"u64"},{"name":"u32"}],"output":{"name":"filetime"}}],[11,"from_last_modification_time","","Creates a new timestamp from the last modification time listed in the specified metadata.",0,{"inputs":[{"name":"metadata"}],"output":{"name":"filetime"}}],[11,"from_last_access_time","","Creates a new timestamp from the last access time listed in the specified metadata.",0,{"inputs":[{"name":"metadata"}],"output":{"name":"filetime"}}],[11,"from_creation_time","","Creates a new timestamp from the creation time listed in the specified metadata.",0,{"inputs":[{"name":"metadata"}],"output":{"name":"option"}}],[11,"seconds","","Returns the whole number of seconds represented by this timestamp.",0,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"seconds_relative_to_1970","","Returns the whole number of seconds represented by this timestamp, relative to the Unix epoch start of January 1, 1970.",0,{"inputs":[{"name":"self"}],"output":{"name":"u64"}}],[11,"nanoseconds","","Returns the nanosecond precision of this timestamp.",0,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"FileTime"]]};
initSearch(searchIndex);
