<?php

$banner = "                                                                               
[#] Solana Token Checker [#] ";
                                                                                 
                                                                                                                                                                 
sleep(2);
echo $banner;
sleep(2);


$file = file_get_contents("address.txt");
$explode = explode("\n", $file);

foreach($explode as $address){
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.mainnet-beta.solana.com");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, '{"method":"getTokenAccountsByOwner","jsonrpc":"2.0","params":["'.$address.'",{"programId":"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"},{"encoding":"jsonParsed","commitment":"processed"}],"id":"35f0036a-3801-4485-b573-2bf29a7c77d2"}');
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Mobile Safari/537.36");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Referer: https://explorer.solana.com/address/".$address."/tokens",
        "Content-Type: application/json", 
        "Origin: https://explorer.solana.com",
        "Accept: */*"
    ));
    
    $exe = curl_exec($ch);
    $dec = json_decode($exe);
    echo "\e[36;1m[+] Token for Address: ".$address." [+]\n\e[00m";
    sleep(2);
    foreach($dec->result->value as $data){
        
        $balance = ($data->account->data->parsed->info->tokenAmount->uiAmountString != 0) ? "\e[92m".$data->account->data->parsed->info->tokenAmount->uiAmountString." \e[00m" : $data->account->data->parsed->info->tokenAmount->uiAmountString;
        echo "Mint: ".$data->account->data->parsed->info->mint."|Balance: ".$balance."\n";
        usleep(50000);
    }
    echo "\n";

}

