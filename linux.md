# Linux

1. `cd /var/www/html/`

Changing current working directory.

2. `cat $(find . -type f -name "*.txt") > /all.txt` or 
``cat `find . -type f -name "*.txt"` > /all.txt`` (historical way)

There are no .txt files in current work directory. So, I decided to find them recursively with `find . -type f -name "*.txt"`. Results pass to `cat` parameters with command substitution.

3. `grep "\S" logs/error.txt > logs/error.txt` or `sed -i '/^$/d' logs/error.txt`.

Using `grep` utility to match lines with greedy pattern that contains at least one non-whitespace symbol.
The second solution was just founded in the Internet and tested.

4. `ls images/*.jpg`

Listing files in directory with pattern.

5. `> logs/access.txt` or `cat /dev/null > logs/access.txt`

Simple way to empty a file content using shell redirect `null` to it. 
Another choosed way to empty contents of a file by redirecting output of `/dev/null` to it.

6. `find images/ -maxdepth 1 -type f -size +2M`

Finding files larger than 2MiB (`-size +2M`) only in `images/` directory without recursive search (`-maxdepth 1`) using `find` utility.
