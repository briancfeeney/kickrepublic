/*!
 * Craft by Pixel & Tonic
 *
 * @package   Craft
 * @author    Pixel & Tonic, Inc.
 * @copyright Copyright (c) 2013, Pixel & Tonic, Inc.
 * @license   http://buildwithcraft.com/license Craft License Agreement
 * @link      http://buildwithcraft.com
 */
(function(a){a(".bucket-select select").change(function(){a(".url-prefix").val(a(".bucket-select select option:selected").attr("data-url-prefix"));a(".bucket-location").val(a(".bucket-select select option:selected").attr("data-location"))});a(".refresh-buckets").click(function(){if(a(this).hasClass("disabled")){return}a(this).addClass("disabled");var b={keyId:a(".s3-key-id").val(),secret:a(".s3-secret-key").val()};a.post(Craft.actionUrl+"/assetSources/getS3Buckets",b,a.proxy(function(c){a(this).removeClass("disabled");if(c.error){alert(c.error);return}if(c.length>0){var e=a(".bucket-select select").prop("disabled",false);var f=e.val();e.empty();for(var d=0;d<c.length;d++){e.append('<option value="'+c[d].bucket+'" data-url-prefix="'+c[d].url_prefix+'" data-location="'+c[d].location+'">'+c[d].bucket+"</option>")}a(".url-prefix").val(a(".bucket-select select option:selected").attr("data-url-prefix"));a(".bucket-location").val(a(".bucket-select select option:selected").attr("data-location"));e.val(f)}},this))});a(".container-select select").change(function(){a(".rackspace-urlPrefix").val(a(".container-select select option:selected").attr("data-urlPrefix"))});a(".rackspace-refresh-containers").click(function(){if(a(this).hasClass("disabled")){return}a(this).addClass("disabled");var b={username:a(".rackspace-username").val(),apiKey:a(".racskspace-api-key").val(),location:a(".rackspace-location-select select").val()};a.post(Craft.actionUrl+"/assetSources/getRackspaceContainers",b,a.proxy(function(d){a(this).removeClass("disabled");if(d.error){alert(d.error);return}if(d.length>0){var f=a(".container-select select").prop("disabled",false);var c=f.val();f.empty();for(var e=0;e<d.length;e++){f.append('<option value="'+d[e].container+'" data-urlPrefix="'+d[e].urlPrefix+'">'+d[e].container+"</option>")}a(".rackspace-urlPrefix").val(a(".container-select select option:selected").attr("data-urlPrefix"));f.val(c)}},this))});a(".google-bucket-select select").change(function(){var b=a(".google-bucket-select select option:selected");a(".google-url-prefix").val(b.attr("data-url-prefix"));a(".google-bucket-location").val(b.attr("data-location"))});a(".google-refresh-buckets").click(function(){if(a(this).hasClass("disabled")){return}a(this).addClass("disabled");var b={keyId:a(".google-key-id").val(),secret:a(".google-secret-key").val()};a.post(Craft.actionUrl+"/assetSources/getGoogleCloudBuckets",b,a.proxy(function(c){a(this).removeClass("disabled");if(c.error){alert(c.error);return}if(c.length>0){var e=a(".google-bucket-select select").prop("disabled",false);var f=e.val();e.empty();for(var d=0;d<c.length;d++){e.append('<option value="'+c[d].bucket+'" data-url-prefix="'+c[d].url_prefix+'" data-location="'+c[d].location+'">'+c[d].bucket+"</option>")}a(".google-url-prefix").val(a(".google-bucket-select select option:selected").attr("data-url-prefix"));e.val(f)}},this))})})(jQuery);