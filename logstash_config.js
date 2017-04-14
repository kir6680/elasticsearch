input {
  beats {
   port => 5044
   type => "log"
  }
}

output {
  elasticsearch {
    hosts => ["mymasternodenetworkname:9200"]
    manage_template => false
    index => "%{[@metadata][beat]}-%{+YYYY.MM.dd}"
    document_type => "%{[@metadata][type]}"
  }
}