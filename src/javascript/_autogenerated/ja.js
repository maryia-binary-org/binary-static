const texts_json = {};
texts_json['JA'] = {"Day":"日","Month":"月","Year":"年","Sorry,_an_error_occurred_while_processing_your_request_":"通信エラーが発生しましたので、再度ページの読み込みをしてください","Please_[_1]log_in[_2]_or_[_3]sign_up[_2]_to_view_this_page_":"このページを見るには[_1]ログイン[_2]または[_3]会員登録[_2]をしてください。","Open_a_Real_Account":"JPY口座申込み","Open_a_Financial_Account":"金融口座の開設","Network_status":"ネットワーク稼働状況","Online":"オンライン","Offline":"オフライン","Connecting_to_server":"サーバーに接続中","Virtual_Account":"デモ口座番号","Real_Account":"リアル口座番号","Investment_Account":"投資口座","Gaming_Account":"ゲームアカウント","Sunday":"日","Monday":"月","Tuesday":"火","Wednesday":"水","Thursday":"木","Friday":"金曜日","Saturday":"土","Su":"日","Mo":"月","Tu":"火","We":"水","Th":"木","Fr":"金","Sa":"土","January":"１月","February":"２月","March":"３月","April":"４月","May":"5","June":"６月","July":"７月","August":"８月","September":"９月","October":"１０月","November":"１１月","December":"１２月","Jan":"1","Feb":"2","Mar":"3","Apr":"4","Jun":"6","Jul":"7","Aug":"8","Sep":"9","Oct":"10","Nov":"11","Dec":"12","Next":"次","Previous":"戻る","Hour":"時間","Minute":"分","AM":"午前","PM":"午後","Time_is_in_the_wrong_format_":"開始時間に間違った値になっております","Start_time":"開始時間","Entry_spot":"取引時刻直後のティック","Purchase_Time":"購入時間","Exit_spot":"判定レート","End_time":"終了時間","Sell_time":"売却時間","Charting_for_this_underlying_is_delayed":"この対象のチャート表示は不可能です","year":"年","month":"ヶ月","week":"週間","day":"日","days":"日","h":"時間","hour":"時間","hours":"時間","min":"最小値","minute":"分","minutes":"分","second":"秒","seconds":"秒","ticks":"tick","Loss":"損益","Profit":"利益","Payout":"合計ペイアウト","Units":"単位","Stake":"購入価格","Duration":"取引期間","End_Time":"判定時刻","Net_profit":"純利益","Return":"リターン率","Contract_Confirmation":"トレード確定","Your_transaction_reference_is":"トレード参照番号：","Rise/Fall":"ラダー","Higher/Lower":"ラダーLOW/ラダーHIGH","In/Out":"レンジ","Matches/Differs":"MATCH/DIFFER","Even/Odd":"偶数/奇数","Over/Under":"以上/以下","Up/Down":"ラダー","Ends_Between/Ends_Outside":"STAY-IN/BREAK-OUT","Touch/No_Touch":"TOUCH/NO-TOUCH","Stays_Between/Goes_Outside":"STAY-IN/BREAK-OUT","Potential_Payout":"ペイアウト","Total_Cost":"合計投資額","Potential_Profit":"期待利益","View":"表示","Buy_price":"購入金額（単価）","Final_price":"最終価格","Long":"ロング","Short":"ショート","Chart":"チャート","Portfolio":"ポジション一覧","Explanation":"取引概要","Last_Digit_Stats":"下一桁ステータス","Waiting_for_entry_tick_":"エントリーTickを検出中です・・・","Waiting_for_exit_tick_":"イグジットTickを検出中です・・・","Please_log_in_":"ログインをしてください。","All_markets_are_closed_now__Please_try_again_later_":"営業時間外のためご利用になれません。","Account_balance:":"口座残高：","Try_our_[_1]Volatility_Indices[_2]_":"当社の[_1]ボラティリティインデックス[_2]をお試しください。","Try_our_other_markets_":"その他の市場もお試しください。","Session":"セッション","Cryptocurrency":"暗号通貨","Fiat_Currency":"不換紙幣","High":"高値","Low":"安値","Close":"終値","Payoff":"支払い","High-Close":"高値-終値","Close-Low":"終値-安値","High-Low":"高値-安値","Your_account_is_fully_authenticated_and_your_withdrawal_limits_have_been_lifted_":"お客さまのご口座はアップグレード済みですので、ご出金制限が引き上げられました。","Your_withdrawal_limit_is_[_1]_[_2]_":"お客さまの出金限度額は[_1] [_2]です。限度額以上の出金額をご希望される場合は、本人確認が必要となりますので\nカスタマーサポートへご連絡ください。","Your_withdrawal_limit_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"お客さまの出金限度額は ¥ [_2] です。限度額以上の出金額をご希望される場合は、本人確認が必要となりますのでカスタマーサポートへご連絡ください。","You_have_already_withdrawn_[_1]_[_2]_":"現在までの出金額は[_1] [_2]です。","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_":"[_1] [_2] と同等の金額を既に出金されています。","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_":"現在、出金可能な限度額（口座残高が不足していない場合）は¥ [_2]となります。","Therefore_your_current_immediate_maximum_withdrawal_(subject_to_your_account_having_sufficient_funds)_is_[_1]_[_2]_(or_equivalent_in_other_currency)_":"そのため、現在即座にご出金いただける限度金額（ただし、ご口座残高が不足していない場合）は[_1] [_2]までです。","Your_[_1]_day_withdrawal_limit_is_currently_[_2]_[_3]_(or_equivalent_in_other_currency)_":"お客さまの[_1]日の出金限度額は現在[_2] [_3]です。限度額以上の出金額をご希望される場合、本人確認が必要となります。","You_have_already_withdrawn_the_equivalent_of_[_1]_[_2]_in_aggregate_over_the_last_[_3]_days_":"直近[_3]日間に累計[_1] [_2] と同等の金額を既に出金されています。","Contracts_where_the_barrier_is_the_same_as_entry_spot_":"1週間以下（1通貨ペア毎）または1ヶ月以上（1通貨ペア毎）のそれぞれのペイアウト合計限度額となります。","Contracts_where_the_barrier_is_different_from_the_entry_spot_":"1週間以下（1通貨ペア毎）または1ヶ月以上（1通貨ペア毎）のそれぞれのペイアウト合計限度額となります。\n","Non-ATM":"内訳の詳細","Duration_up_to_7_days":"1週間以下（1通貨ペア毎）","Duration_above_7_days":"1ヶ月以上（1通貨ペア毎）","Major_Pairs":"1日あたりに購入できる限度額","Forex":"外国為替","This_field_is_required_":"この項目は必須です。","Please_select_the_checkbox_":"チェックボックスを選択してください","Please_accept_the_terms_and_conditions_":"利用規約に同意していただく必要があります。","Only_[_1]_are_allowed_":"[_1]のみご利用いただけます。","letters":"文字","numbers":"数字","space":"スペース","Sorry,_an_error_occurred_while_processing_your_account_":"通信エラーが発生しましたので、再度ページの読み込みをしてください","Your_changes_have_been_updated_successfully_":"設定が正しく更新されました。","Your_settings_have_been_updated_successfully_":"設定は正しく更新されました。","Female":"女性","Male":"男性","Please_confirm_that_all_the_information_above_is_true_and_complete_":"上記の内容が全て正しい情報であるか再度ご確認ください。","Your_token_has_expired_or_is_invalid__Please_click_<a_href=\"[_1]\">here</a>_to_restart_the_verification_process_":"【認証専用のURL】の有効期限が切れています。再度、<a href=\"[_1]\">「最初からやり直し」</a> をクリックして【認証専用のURL】を発行して下さい。","The_email_address_provided_is_already_in_use__If_you_forgot_your_password,_please_try_our_<a_href=\"[_1]\">password_recovery_tool</a>_or_contact_our_customer_service_":"ご入力いただいたメールアドレスは既に他のログインIDで使用されています。パスワードをお忘れの場合は、<a href=\"[_1]\">こちら</a>からパスワードを再発行して頂くか、カスタマーサポートまでご連絡下さい。","Password_should_have_lower_and_uppercase_letters_with_numbers_":"大文字と小文字を含む英字と数字を組み合わせる必要があります","Password_is_not_strong_enough_":"パスワード強度が十分ではありません。","Your_session_duration_limit_will_end_in_[_1]_seconds_":"お客様の取引継続時間制限は[_1]秒後に終了します。","Invalid_email_address_":"メールアドレスが無効です。","Thank_you_for_signing_up!_Please_check_your_email_to_complete_the_registration_process_":"口座開設ありがとうございます。ご登録頂いたメールアドレスに【認証専用のURL】を送信致しましたのでご確認下さい。","Please_select":"選択して下さい","Minimum_of_[_1]_characters_required_":"[_1]文字以上でご入力ください。","Please_confirm_that_you_are_not_a_politically_exposed_person_":"外国の重要な公人ではない場合はチェックを入れて下さい","Asset":"取引対象","Opens":"取引開始時間","Closes":"取引終了時間","Settles":"決済時間","Upcoming_Events":"取引時間短縮日及び祝日","Closes_early_(at_21:00)":"判定時刻:21:00","Closes_early_(at_18:00)":"判定時刻:18:00","New_Year's_Day":"元旦","Christmas_Day":"クリスマス","Fridays":"金曜日","today":"本日","today,_Fridays":"本日：金曜日","Please_select_a_payment_agent":"決済サービスを選択してください。","The_Payment_Agent_facility_is_currently_not_available_in_your_country_":"その決済サービスは、お客さまのお住まいの国では現在ご利用いただけません。","Invalid_amount,_minimum_is":"無効な値です。最小","Invalid_amount,_maximum_is":"無効な値です。最大はXXXです。","Your_request_to_withdraw_[_1]_[_2]_from_your_account_[_3]_to_Payment_Agent_[_4]_account_has_been_successfully_processed_":"お客さまのご口座[_3]から決済サービス[_4]口座へ[_1] [_2]の出金リクエストが正常に処理されました。","Up_to_[_1]_decimal_places_are_allowed_":"小数点以下は%桁までご利用いただけます。","Your_token_has_expired_or_is_invalid__Please_click_[_1]here[_2]_to_restart_the_verification_process_":"【認証専用のURL】の有効期限が切れています。再度、[_1]「最初からやり直し」[_2] をクリックして【認証専用のURL】を発行して下さい。","New_token_created_":"新しいトークンが作成されました。","The_maximum_number_of_tokens_([_1])_has_been_reached_":"トークンの最大数([_1]) に達しました。","Name":"お名前","Token":"トークン","Last_Used":"最後に使用したもの","Scopes":"範囲","Never_Used":"使用されることはありません。","Delete":"消去","Are_you_sure_that_you_want_to_permanently_delete_the_token":"トークンを完全に削除してもよろしいですか？","Please_select_at_least_one_scope":"範囲を1つ以上選択してください","Guide":"ガイド","Finish":"完了","Step":"ステップ","Select_your_market":"取引市場を選択","Select_your_underlying_asset":"原資産を選択して下さい","Select_your_trade_type":"取引タイプを選択して下さい","Adjust_trade_parameters":"取引期間を選択して頂き購入希望ロット数を入力して下さい。","Predict_the_direction<br_/>and_purchase":"方向性<br />を予測して購入","Sorry,_this_feature_is_available_to_virtual_accounts_only_":"申し訳ございません。この機能はデモ口座のみでご利用頂けます。","[_1]_[_2]_has_been_credited_into_your_virtual_account:_[_3]_":"[_1] [_2]はデモ口座[_3]に付与されました。","years":"年","months":"ヶ月","weeks":"週間","Your_changes_have_been_updated_":"変更が更新されました。","Please_enter_an_integer_value":"半角で数値をご入力して下さい","Session_duration_limit_cannot_be_more_than_6_weeks_":"セッション期間制限は7週間以上に設定できません。","You_did_not_change_anything_":"変更はありません。","Please_select_a_valid_date_":"有効な日付を選択してください","Please_select_a_valid_time_":"有効な時間を選択してください","Time_out_cannot_be_in_the_past_":"終了時間を過去の時間に設定することはできません。","Time_out_must_be_after_today_":"終了時間は明日以降として設定して下さい。","Time_out_cannot_be_more_than_6_weeks_":"終了時間を6週間以上先には設定できません。","Exclude_time_cannot_be_less_than_6_months_":"5ヶ月以下の除外時間を設定することはできません。","Exclude_time_cannot_be_for_more_than_5_years_":"6年以上の除外期間は設定することはできません。","When_you_click_\"OK\"_you_will_be_excluded_from_trading_on_the_site_until_the_selected_date_":"\"Ok\"をクリックすると、選択した日付までこのサイトでのトレードができなくなります。","Ref_":"約定番号","Resale_not_offered":"満期までの2分は売却取引不可","Date":"日付","Action":"売買","Contract":"トレード","Sale_Date":"口座残高反映時間","Sale_Price":"売却 / ペイアウト金額","Total_Profit/Loss":"合計　損益","Your_account_has_no_trading_activity_":"取引履歴はありません","Today":"本日","Details":"お客さま基本情報","Sell":"売却","Buy":"購入","Virtual_money_credit_to_account":"バーチャルマネーを入金","This_feature_is_not_relevant_to_virtual-money_accounts_":"この機能は、デモ口座ではご利用頂けません。","Japan":"日本","Questions":"問題","True":"正","False":"誤","There_was_some_invalid_character_in_an_input_field_":"入力された文字に使用できない文字が含まれています。","Please_follow_the_pattern_3_numbers,_a_dash,_followed_by_4_numbers_":"ハイフンを入れて半角で入力してください","Score":"スコア","{JAPAN_ONLY}Take_knowledge_test":"知識確認テストを受ける","{JAPAN_ONLY}Knowledge_Test_Result":"知識確認テスト結果","{JAPAN_ONLY}Knowledge_Test":"知識確認テスト","{JAPAN_ONLY}Congratulations,_you_have_pass_the_test,_our_Customer_Support_will_contact_you_shortly_":"おめでとうございます。テストに合格されましたので、カスタマーサポートよりメールにて口座開設の次のステップについてご連絡させていただきます。","{JAPAN_ONLY}Sorry,_you_have_failed_the_test,_please_try_again_after_24_hours_":"残念ながら、合格点に達しませんでした。24時間以降（週末を除く）に再受験してください。","{JAPAN_ONLY}Dear_customer,_you_are_not_allowed_to_take_knowledge_test_until_[_1]__Last_test_taken_at_[_2]_":"お客さまへ\n\n現在、知識確認テストの受験を行うことができません。[_1]以降に再受験してください。前回受験日[_2]","{JAPAN_ONLY}Dear_customer,_you've_already_completed_the_knowledge_test,_please_proceed_to_next_step_":"お客さまへ\n\n既に知識確認テストは完了しています。送信済みのメールを確認の上、口座開設の手続きを進めてください。","{JAPAN_ONLY}Please_complete_the_following_questions_":"知識確認テスト用ディスクレーマー","{JAPAN_ONLY}The_test_is_unavailable_now,_test_can_only_be_taken_again_on_next_business_day_with_respect_of_most_recent_test_":"現在テストを受験いただけません。前回のテストの翌営業日に再度受験いただけます。","Weekday":"平日","{JAPAN_ONLY}Your_Application_has_Been_Processed__Please_Re-Login_to_Access_Your_Real-Money_Account_":"リアル口座開設は完了致しました。使用するには再度ログインが必要となります。","Processing_your_request___":"ただいま処理中です。しばらくお待ち下さい。","Please_check_the_above_form_for_pending_errors_":"未入力の項目がありますのでご確認ください","Asian_Up":"ASIAN UP","Asian_Down":"ASIAN DOWN","Digit_Matches":"DIGIT MATCH","Digit_Differs":"DIGIT DIFFERS","Digit_Odd":"DIGIT 奇数","Digit_Even":"DIGIT 偶数","Digit_Over":"DIGIT OVER","Digit_Under":"DIGIT UNDER","[_1]_[_2]_payout_if_[_3]_is_strictly_higher_than_or_equal_to_Barrier_at_close_on_[_4]_":"[_3]のラダーHIGHは、判定時刻([_4])の時点でバリア価格以上であると予測","[_1]_[_2]_payout_if_[_3]_is_strictly_lower_than_Barrier_at_close_on_[_4]_":"[_3]のラダーLOWは、判定時刻([_4])の時点でバリア価格未満であると予測","[_1]_[_2]_payout_if_[_3]_does_not_touch_Barrier_through_close_on_[_4]_":"[_3]のNO-TOUCHは、取引期間([_4])が終了するまでにバリア価格に達しないと予測","[_1]_[_2]_payout_if_[_3]_touches_Barrier_through_close_on_[_4]_":"[_3]のTOUCHは、取引期間([_4])が終了するまでバリア価格に達すると予測","[_1]_[_2]_payout_if_[_3]_ends_on_or_between_low_and_high_values_of_Barrier_at_close_on_[_4]_":"[_3]のEND-INは、判定時刻([_4])の時点で上限バリア未満かつ下限バリア以上であると予測","[_1]_[_2]_payout_if_[_3]_ends_outside_low_and_high_values_of_Barrier_at_close_on_[_4]_":"[_3]のEND-OUTは、判定時刻([_4])の時点で上限バリア以上もしくは下限バリア未満であるとを予測","[_1]_[_2]_payout_if_[_3]_stays_between_low_and_high_values_of_Barrier_through_close_on_[_4]_":"[_3]のSTAY-INは取引期間中([_4])に上限バリア未満かつ下限バリア超過を維持すると予測","[_1]_[_2]_payout_if_[_3]_goes_outside_of_low_and_high_values_of_Barrier_through_close_on_[_4]_":"[_3]のBREAK-OUTは、取引期間中([_4])に上限バリア以上もしくは下限バリア以下になると予測","M":"ヶ月","D":"日","Higher":"ラダーHIGH","Higher_or_equal":"ラダーHIGH","Lower":"ラダーLOW","Touches":"TOUCH","Does_Not_Touch":"NO-TOUCH","Ends_Between":"END-IN","Ends_Outside":"END-OUT","Stays_Between":"STAY-IN","Goes_Outside":"BREAK-OUT","All_barriers_in_this_trading_window_are_expired":"すべてのバリア価格は権利行使済みです","Remaining_time":"満期までの残り時間","Market_is_closed__Please_try_again_later_":"営業時間外のためご利用になれません。","This_symbol_is_not_active__Please_try_another_symbol_":"このシンボルは現在ご利用いただけません。他のシンボルでお試しください。","Sorry,_your_account_is_not_authorised_for_any_further_contract_purchases_":"申し訳ございませんが、お客さまの取引口座に制限をさせていただいております。お手数ですが、カスタマーサポートへご連絡ください。","Lots":"ロット数","Payout_per_lot_=_1,000":"ペイアウトは1ロットあたり1,000円","This_page_is_not_available_in_the_selected_language_":"設定されている言語ではこのページを閲覧いただけません。","Percentage":"割合","Digit":"数字","Amount":"金額","Deposit":"入金","Withdrawal":"出金","Your_request_to_transfer_[_1]_[_2]_from_[_3]_to_[_4]_has_been_successfully_processed_":"[_3]から[_4]へのご送金[_1] [_2]リクエストが正常に処理されました。","Date_and_Time":"日時","Browser":"ブラウザ","IP_Address":"IPアドレス","Status":"金融資産","Successful":"成功しました","Failed":"失敗しました","Your_account_has_no_Login/Logout_activity_":"お客さまのご口座はログイン/ログアウトのアクティビティはございません。","logout":"ログアウト","Please_enter_a_number_between_[_1]_":"[_1]の間の数字を入力してください。","[_1]_days_[_2]_hours_[_3]_minutes":"[_1]日 [_2]時間 [_3]分","Your_trading_statistics_since_[_1]_":"[_1]からのお取引統計情報","Unlock_Cashier":"入出金ロック解除","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_enter_the_password_":"お客様のキャッシャーはリクエストにより、ロックされました。 - 解除するにはパスワードをご入力ください。","Lock_Cashier":"入出金をロック","An_additional_password_can_be_used_to_restrict_access_to_the_cashier_":"入出金へのアクセスを制限するために、追加パスワードを使用することができます。","Update":"更新","Sorry,_you_have_entered_an_incorrect_cashier_password":"申し訳ございませんが、ご入力頂いた入出金パスワードに誤りがあります","You_have_reached_the_withdrawal_limit_":"出金制限値に達しました。","Start_Time":"取引開始時刻","Entry_Spot":"取引開始時刻直後のティック","Low_Barrier":"下限バリア","Low_Barrier_([_1])":"下限バリア","High_Barrier":"上限バリア","High_Barrier_([_1])":"上限バリア","Barrier_([_1])":"バリア価格","This_contract_won":"このトレードは勝ち判定","This_contract_lost":"このトレードは負け判定","Spot":"スポットレート","Barrier":"バリア価格","Target":"ターゲット","Equals":"等しい","Not":"ない","Description":"取引内容","Credit/Debit":"支払/受取","Balance":"口座残高","Purchase_Price":"購入金額","Profit/Loss":"損益","Contract_Information":"約定済み通知","Contract_Expiry":"取引終了","Contract_Sold":"売却","Current":"現在","Closed":"終了","Contract_has_not_started_yet":"トレードはまだ開始していません","Price":"売却/ペイアウト金額","Spot_Time":"スポットタイム","Spot_Time_(GMT)":"現在時刻（GMT）","Current_Time":"現在時刻：","Exit_Spot_Time":"売却/判定時刻","Exit_Spot":"判定レート","Indicative":"参考売却金額","There_was_an_error":"エラーが発生しました","Sell_at_market":"売却","You_have_sold_this_contract_at_[_1]_[_2]":"[_1] [_2]でこのトレードを売却しました","Your_transaction_reference_number_is_[_1]":"決済の参照番号は[_1]です","Note":"注意","Contract_will_be_sold_at_the_prevailing_market_price_when_the_request_is_received_by_our_servers__This_price_may_differ_from_the_indicated_price_":"当社のサーバがリクエストを受理した時点での市場価格で売却取引が成立します。実際の約定価格と注文時の表示価格と異なる場合があります。","Contract_ID":"トレード ID","Contract_Type":"トレードの種類","Transaction_ID":"トランザクションID","Remaining_Time":"満期までの残り時間","Barrier_Change":"バリア値の変更","Audit":"監査","Audit_Page":"監査ページ","View_Chart":"チャート表示","Contract_Starts":"トレード開始","Contract_Ends":"トレード終了","Exit_Time_and_Exit_Spot":"判定時間と判定レート","Please_select_a_value":"値を選択してください。","You_have_not_granted_access_to_any_applications_":"アプリケーションへのアクセス権限がありません。","Permissions":"アクセス許可","Never":"決してありません","Revoke_access":"アクセス権の取消","Are_you_sure_that_you_want_to_permanently_revoke_access_to_the_application":"アプリケーションへのアクセスを完全に削除してもよろしいですか？","Transaction_performed_by_[_1]_(App_ID:_[_2])":"[_1](App ID:[_2])によって取引が実行されました","Admin":"管理者","Read":"読む","Payments":"アフィリエイト報酬の支払いについて","[_1]_Please_click_the_link_below_to_restart_the_password_recovery_process_":"[_1] パスワード回復の手順を初めから行うには、次のリンクをクリックしてください。","Your_password_has_been_successfully_reset__Please_log_into_your_account_using_your_new_password_":"パスワードの再設定を完了しました。新しいパスワードでログインしてください。","Please_check_your_email_for_the_password_reset_link_":"ご登録いただいたメールアドレスに認証専用のURLを送信いたしました。","details":"詳細","Withdraw":"出金","Insufficient_balance_":"口座残高が不足しています","This_is_a_staging_server_-_For_testing_purposes_only":"これはテストを目的としたステージングサーバーです","The_server_<a_href=\"[_1]\">endpoint</a>_is:_[_2]":"サーバーの <a href=\"[_1]\">エンドポイント</a> : [_2]","Sorry,_account_signup_is_not_available_in_your_country_":"申し訳ありませんが、あなたの国から口座開設はできません。","There_was_a_problem_accessing_the_server_":"サーバーアクセスにエラーが発生しました。","There_was_a_problem_accessing_the_server_during_purchase_":"購入時にサーバーアクセスのエラーが発生がしました。","Should_be_a_valid_number_":"有効な数字を入力してください。","Should_be_more_than_[_1]":"[_1]を上回る必要があります","Should_be_less_than_[_1]":"[_1]より低い必要があります。","Should_be_between_[_1]_and_[_2]":"投資は、[_1]から[_2]の間である必要があります。","Only_letters,_numbers,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"文字、数字、スペース、ハイフン(-)、ピリオド(.)、アポストロフィ(')のみご利用いただけます。","Only_letters,_space,_hyphen,_period,_and_apostrophe_are_allowed_":"文字、スペース、ハイフン、ピリオド、アポストロフィのみご利用いただけます。","Only_letters,_numbers,_and_hyphen_are_allowed_":"文字、数字、ハイフンのみご利用いただけます。","Only_numbers,_space,_and_hyphen_are_allowed_":"数字、スペース、ハイフンのみご利用いただけます。","Only_numbers_and_spaces_are_allowed_":"数字とスペースのみご利用いただけます。","Only_letters,_numbers,_space,_and_these_special_characters_are_allowed:_-___'_#_;_:_(_)_,_@_/":"英数字、スペース、特殊文字（- . ' # ; : ( ) , @ /）のみご利用いただけます。","The_two_passwords_that_you_entered_do_not_match_":"入力頂いたパスワードと一致しません。","[_1]_and_[_2]_cannot_be_the_same_":"[_1] と [_2]を同じ内容にすることはできません。","You_should_enter_[_1]_characters_":"[_1]文字でご入力ください","Indicates_required_field":"入力必須項目です","Verification_code_is_wrong__Please_use_the_link_sent_to_your_email_":"ワンタイムパスワードに誤りがあります。メールに表示されているリンクをご利用ください。","The_password_you_entered_is_one_of_the_world's_most_commonly_used_passwords__You_should_not_be_using_this_password_":"入力されたパスワードは世界でよく使用されるパスワードです。パスワードの変更をおすすめします。","Hint:_it_would_take_approximately_[_1][_2]_to_crack_this_password_":"ヒント：このパスワードをクラックするには約[_1][_2]分を要します。","thousand":"千","million":"百万","Should_start_with_letter_or_number,_and_may_contain_hyphen_and_underscore_":"文字または数字から始める必要があり、ハイフンや下線も含めることができます。","Your_address_could_not_be_verified_by_our_automated_system__You_may_proceed_but_please_ensure_that_your_address_is_complete_":"お客さまの住所は当社の自動システムで確認できませんでした。 続行できますが、住所が正しいか再度ご確認ください。","Validate_address":"住所確認","Congratulations!_Your_[_1]_Account_has_been_created_":"おめでとうございます！[_1]口座の作成が完了しました。","The_main_password_of_account_number_[_1]_has_been_changed_":"口座番号 [_1]のメインパスワード変更を承りました。","[_1]_deposit_from_[_2]_to_account_number_[_3]_is_done__Transaction_ID:_[_4]":"[_2]から口座番号[_3]への入金が完了しました。取引参照ID：[_4]","[_1]_withdrawal_from_account_number_[_2]_to_[_3]_is_done__Transaction_ID:_[_4]":"口座番号[_2]から[_3]へのご出金が完了しました。取引参照ID：[_4]","Your_cashier_is_locked_as_per_your_request_-_to_unlock_it,_please_click_<a_href=\"[_1]\">here</a>_":"お客様の入出金はリクエストによりロックしました。 - 解除するには<a href=\"[_1]\">こちらをクリック</a>してください。","Your_cashier_is_locked_":"入出金サービスにロックがかかっています。","You_have_insufficient_funds_in_your_Binary_account,_please_<a_href=\"[_1]\">add_funds</a>_":"バイナリー口座に十分な資金がありません。<a href=\"[_1]\">資金をご入金</a>ください。","Sorry,_this_feature_is_not_available_in_your_jurisdiction_":"申し訳ございませんが、お客様の地域ではこの機能をご利用いただけません。","You_have_reached_the_limit_":"制限値に達しました。","Main_password":"メインパスワード","Investor_password":"トレーダーパスワード","Current_password":"現在のパスワード","New_password":"新しいパスワード","Demo_Standard":"デモ スタンダード","Standard":"スタンダード","Demo_Advanced":"デモ アドバンス","Advanced":"アドバンス","Demo_Volatility_Indices":"デモ ボラティリティ インデックス","Real_Standard":"リアル スタンダード","Real_Advanced":"リアル アドバンス","Real_Volatility_Indices":"リアル ボラティリティインデックス","Change_Password":"パスワード変更","Demo_Accounts":"デモ口座","Real-Money_Accounts":"リアルマネー口座","Our_MT5_service_is_currently_unavailable_to_EU_residents_due_to_pending_regulatory_approval_":"規制当局からの承認待ちのため、現在EU居住者の方はMT5をご利用いただけません。","for_MT5_Account":"MT5口座用","[_1]_Account_[_2]":"[_1] 口座 [_2]","Min":"最小","Max":"最大","Current_balance":"現在の残高","[_1]Authenticate_your_account[_2]_now_to_take_full_advantage_of_all_payment_methods_available_":"[_1]アカウントを認証[_2]して当社の機能を最大限活用しましょう","Please_set_the_[_1]currency[_2]_of_your_account_":"口座に使用する[_1]通貨[_2]をご選択ください。","Please_set_your_30-day_turnover_limit_in_our_[_1]self-exclusion_facilities[_2]_to_remove_deposit_limits_":"入金制限を解除するには、[_1]自己制限[_2]から30日間の取引限度額を設定してください。","Please_set_[_1]country_of_residence[_2]_before_upgrading_to_a_real-money_account_":"リアル口座へアップグレードされる前に%居住国[_2]を設定してください。","Please_complete_the_[_1]financial_assessment_form[_2]_to_lift_your_withdrawal_and_trading_limits_":"取引上限と出金限度額を引き上げるには下記財務評価書にご記入をお願いします。","Please_[_1]complete_your_account_profile[_2]_to_lift_your_withdrawal_and_trading_limits_":"出金制限及び取引制限を解除するには、[_1]口座情報の入力を完了[_2]していただく必要があります。","Please_[_1]accept_the_updated_Terms_and_Conditions[_2]_to_lift_your_withdrawal_and_trading_limits_":"出金制限及び取引制限を解除するには、[_1]改訂版利用規約に同意[_2]いただく必要があります。","Your_account_is_restricted__Kindly_[_1]contact_customer_support[_2]_for_assistance_":"お客さまの口座は、現在ご利用制限が掛っております。[_1]カスタマーサポート[_2]までご連絡下さい。","Connection_error:_Please_check_your_internet_connection_":"接続エラー：インターネット接続状況をご確認ください。","You_have_reached_the_rate_limit_of_requests_per_second__Please_try_later_":"ページを更新して頂くか、もう一度お試しください。","[_1]_requires_your_browser's_web_storage_to_be_enabled_in_order_to_function_properly__Please_enable_it_or_exit_private_browsing_mode_":"[_1]では、適切に機能を果たす上でブラウザのウェブストレージが必要となります。ウェブストレージを有効にするか、ブラウザのプライベートモードを終了してください。","We_are_reviewing_your_documents__For_more_details_[_1]contact_us[_2]_":"現在書類確認を行っております。詳細を確認されたい場合は、[_1]お問い合わせ[_2]ください。","Your_web_browser_([_1])_is_out_of_date_and_may_affect_your_trading_experience__Proceed_at_your_own_risk__[_2]Update_browser[_3]":"お使いのブラウザ ([_1]) はこのサイトではサポートしていません。お手数ですが、他のブラウザのご利用ください。[_2]他のブラウザを確認する[_3]","Bid":"入札","Closed_Bid":"終了した入札","Create":"作成","Commodities":"コモディティ","Indices":"インデックス","Stocks":"株式","Volatility_Indices":"ボラティリティ指数","Set_Currency":"通貨選択","Please_choose_a_currency":"通貨を選択してください","Create_Account":"口座開設","Accounts_List":"口座リスト","[_1]_Account":"[_1]口座","Investment":"投資","Gaming":"ゲーム","Virtual":"デモ口座","Real":"リアルマネー口座","Bitcoin":"ビットコイン","Bitcoin_Cash":"ビットコインキャッシュ","Ether":"Ether（イーサ）","Ether_Classic":"イーサクラシック","Litecoin":"ライトコイン","Invalid_document_format:_\"[_1]\"":"文書フォーマットが無効です：「[_1]」","File_([_1])_size_exceeds_the_permitted_limit__Maximum_allowed_file_size:_3MB":"ファイルサイズ ([_1]) が制限を超えています。最大ファイルサイズ：3MB","ID_number_is_required_for_[_1]_":"登録番号は[_1]に必要となります。","Only_letters,_numbers,_space,_underscore,_and_hyphen_are_allowed_for_ID_number_":"登録番号欄には英数字、スペース、アンダーライン、ハイフンでご入力ください。","Expiry_date_is_required_for_[_1]_":"有効期限は[_1]である必要があります。","Passport":"パスポート","ID_card":"身分証明書","Driving_licence":"運転免許証","Front_Side":"表面","Reverse_Side":"裏面","Front_and_reverse_side_photos_of_[_1]_are_required_":"写真付き[_1]の裏表面が必要です。","[_1]Your_Proof_of_Identity_or_Proof_of_Address[_2]_did_not_meet_our_requirements__Please_check_your_email_for_further_instructions_":"[_1]お客さまがご提示いただいた身分証明または住所証明[_2]は必要要件を満たしていませんでした。詳細またはその後の手順については、メールをご確認ください。","Following_file(s)_were_already_uploaded:_[_1]":"以下のファイルはアップロード済みです：[_1]"};