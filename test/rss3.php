<?php

$rss = simplexml_load_file('http://feeds.feedburner.com/security-awareness-tip-of-the-day?format=xml');

echo '<h1>'. $rss->channel->title . '</h1>';

foreach ($rss->channel->item as $item) {
   echo '<h2><a href="'. $item->link .'">' . $item->title . "</a></h2>";
   echo "<p>" . $item->pubDate . "</p>";
   echo "<p>" . $item->description . "</p>";
} 


?>