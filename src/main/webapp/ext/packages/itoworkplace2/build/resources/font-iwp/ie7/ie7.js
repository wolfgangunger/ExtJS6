/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'iwp\'">' + entity + '</span>' + html;
	}
	var icons = {
		'iwp-icon-bdqv': '&#xe901;',
		'iwp-icon-bmw_intranet_search': '&#xe902;',
		'iwp-icon-ekgq': '&#xe938;',
		'iwp-icon-emt': '&#xe903;',
		'iwp-icon-eve': '&#xe904;',
		'iwp-icon-eve_aerodynamics': '&#xe905;',
		'iwp-icon-eve_assign': '&#xe906;',
		'iwp-icon-eve_catalog': '&#xe907;',
		'iwp-icon-eve_configuration': '&#xe908;',
		'iwp-icon-eve_data_maintenance': '&#xe909;',
		'iwp-icon-eve_examination': '&#xe90a;',
		'iwp-icon-eve_group': '&#xe90b;',
		'iwp-icon-eve_homologation': '&#xe90c;',
		'iwp-icon-eve_manual': '&#xe90d;',
		'iwp-icon-eve_market': '&#xe90e;',
		'iwp-icon-eve_new_car': '&#xe90f;',
		'iwp-icon-eve_pkw_outline': '&#xe9b4;',
		'iwp-icon-eve_rowi': '&#xe910;',
		'iwp-icon-eve_salesportal': '&#xe911;',
		'iwp-icon-fls': '&#xe912;',
		'iwp-icon-fls_aes': '&#xe913;',
		'iwp-icon-fls_bodyshell_outline': '&#xe914;',
		'iwp-icon-fls_ccb': '&#xe915;',
		'iwp-icon-fls_derivative_outline': '&#xe916;',
		'iwp-icon-fls_detailtext': '&#xe917;',
		'iwp-icon-fls_doc_freig_ok': '&#xe93a;',
		'iwp-icon-fls_doc_geo_ok': '&#xe93b;',
		'iwp-icon-fls_doc_ok': '&#xe918;',
		'iwp-icon-fls_escalation': '&#xe919;',
		'iwp-icon-fls_express_mode': '&#xe91a;',
		'iwp-icon-fls_factory': '&#xe91b;',
		'iwp-icon-fls_gfb': '&#xe91c;',
		'iwp-icon-fls_i_stages': '&#xe91d;',
		'iwp-icon-fls_kommunal': '&#xe922;',
		'iwp-icon-fls_module': '&#xe926;',
		'iwp-icon-fls_nael_no_prisma': '&#xe927;',
		'iwp-icon-fls_part': '&#xe928;',
		'iwp-icon-fls_part_list': '&#xe929;',
		'iwp-icon-fls_part_neu': '&#xe9b3;',
		'iwp-icon-fls_part2structure': '&#xe92a;',
		'iwp-icon-fls_progress': '&#xe92b;',
		'iwp-icon-fls_signing': '&#xe92c;',
		'iwp-icon-gams': '&#xe92d;',
		'iwp-icon-gen_add': '&#xe92e;',
		'iwp-icon-gen_add_col': '&#xe950;',
		'iwp-icon-gen_arrow_down': '&#xe92f;',
		'iwp-icon-gen_arrow_left': '&#xe930;',
		'iwp-icon-gen_arrow_right': '&#xe931;',
		'iwp-icon-gen_arrow_up': '&#xe932;',
		'iwp-icon-gen_back': '&#xe933;',
		'iwp-icon-gen_calc': '&#xe934;',
		'iwp-icon-gen_calendar': '&#xe93c;',
		'iwp-icon-gen_car_config': '&#xe93d;',
		'iwp-icon-gen_chart': '&#xe921;',
		'iwp-icon-gen_checkbox_checked': '&#xe900;',
		'iwp-icon-gen_checkbox_unchecked': '&#xe91e;',
		'iwp-icon-gen_close': '&#xe93e;',
		'iwp-icon-gen_close_l': '&#xe93f;',
		'iwp-icon-gen_close_s': '&#xe940;',
		'iwp-icon-gen_collection_collapse': '&#xe941;',
		'iwp-icon-gen_collection_expand': '&#xe942;',
		'iwp-icon-gen_comment': '&#xe943;',
		'iwp-icon-gen_confidental': '&#xe944;',
		'iwp-icon-gen_continue': '&#xe945;',
		'iwp-icon-gen_copy': '&#xe946;',
		'iwp-icon-gen_cut': '&#xe947;',
		'iwp-icon-gen_del_empty_col': '&#xe948;',
		'iwp-icon-gen_del_col': '&#xe973;',
		'iwp-icon-gen_delete': '&#xe949;',
		'iwp-icon-gen_detail_search': '&#xe94a;',
		'iwp-icon-gen_edit': '&#xe94b;',
		'iwp-icon-gen_email': '&#xe94c;',
		'iwp-icon-gen_engine': '&#xe94d;',
		'iwp-icon-gen_export_excel': '&#xe91f;',
		'iwp-icon-gen_export_excel_r': '&#xe974;',
		'iwp-icon-gen_export_pdf': '&#xe98a;',
		'iwp-icon-gen_external_app': '&#xe951;',
		'iwp-icon-gen_favorite': '&#xe952;',
		'iwp-icon-gen_file_upload': '&#xe935;',
		'iwp-icon-gen_fill': '&#xe953;',
		'iwp-icon-gen_filter': '&#xe954;',
		'iwp-icon-gen_filter_add': '&#xe98b;',
		'iwp-icon-gen_filter_empty_rows': '&#xe800;',
		'iwp-icon-gen_fit': '&#xe9b9;',
		'iwp-icon-gen_fullscreen': '&#xe955;',
		'iwp-icon-gen_goto': '&#xe956;',
		'iwp-icon-gen_graphics': '&#xe957;',
		'iwp-icon-gen_guided_tour': '&#xe936;',
		'iwp-icon-gen_help': '&#xe958;',
		'iwp-icon-gen_hierarchy_list_collapse': '&#xe959;',
		'iwp-icon-gen_hierarchy_list_expand': '&#xe95a;',
		'iwp-icon-gen_highlight_in_grid': '&#xe95b;',
		'iwp-icon-gen_hourglass': '&#xe95c;',
		'iwp-icon-gen_info': '&#xe95d;',
		'iwp-icon-gen_info_error': '&#xe801;',
		'iwp-icon-gen_info_info': '&#xe802;',
		'iwp-icon-gen_info_warning': '&#xe803;',
		'iwp-icon-gen_kontextmenu': '&#xe923;',
		'iwp-icon-gen_lang_de': '&#xe95e;',
		'iwp-icon-gen_lang_en': '&#xe95f;',
		'iwp-icon-gen_layoutmanager': '&#xe960;',
		'iwp-icon-gen_link': '&#xe961;',
		'iwp-icon-gen_linked_docs': '&#xe962;',
		'iwp-icon-gen_locked': '&#xe963;',
		'iwp-icon-gen_lync': '&#xe964;',
		'iwp-icon-gen_menu': '&#xe965;',
		'iwp-icon-gen_message': '&#xe966;',
		'iwp-icon-gen_minimize_size': '&#xe920;',
		'iwp-icon-gen_minus': '&#xe967;',
		'iwp-icon-gen_motorcycle': '&#xe937;',
		'iwp-icon-gen_nav_arrow_down': '&#xe968;',
		'iwp-icon-gen_nav_arrow_left': '&#xe969;',
		'iwp-icon-gen_nav_arrow_right': '&#xe96a;',
		'iwp-icon-gen_nav_arrow_up': '&#xe96b;',
		'iwp-icon-gen_nav_back': '&#xe96c;',
		'iwp-icon-gen_nav_end': '&#xe96d;',
		'iwp-icon-gen_nav_next': '&#xe96e;',
		'iwp-icon-gen_nav_start': '&#xe96f;',
		'iwp-icon-gen_ok': '&#xe970;',
		'iwp-icon-gen_paste': '&#xe971;',
		'iwp-icon-gen_person_info': '&#xe972;',
		'iwp-icon-gen_pin': '&#xe975;',
		'iwp-icon-gen_pin_active': '&#xe939;',
		'iwp-icon-gen_plus': '&#xe976;',
		'iwp-icon-gen_print': '&#xe977;',
		'iwp-icon-gen_radiobtn_checked': '&#xe924;',
		'iwp-icon-gen_radiobtn_unchecked': '&#xe925;',
		'iwp-icon-gen_refresh': '&#xe978;',
		'iwp-icon-gen_remove_filter': '&#xe804;',
		'iwp-icon-gen_run': '&#xe979;',
		'iwp-icon-gen_save': '&#xe97a;',
		'iwp-icon-gen_screenshot': '&#xe97b;',
		'iwp-icon-gen_search': '&#xe97c;',
		'iwp-icon-gen_settings': '&#xe97d;',
		'iwp-icon-gen_share': '&#xe97e;',
		'iwp-icon-gen_show_error_warning': '&#xe9ae;',
		'iwp-icon-gen_sort': '&#xe97f;',
		'iwp-icon-gen_sort_asc': '&#xe980;',
		'iwp-icon-gen_sort_desc': '&#xe981;',
		'iwp-icon-gen_sort_list_asc': '&#xe982;',
		'iwp-icon-gen_sort_list_desc': '&#xe983;',
		'iwp-icon-gen_split_bottom': '&#xe984;',
		'iwp-icon-gen_split_left': '&#xe985;',
		'iwp-icon-gen_split_right': '&#xe986;',
		'iwp-icon-gen_split_top': '&#xe987;',
		'iwp-icon-gen_status_lights': '&#xe9af;',
		'iwp-icon-gen_stop': '&#xe9b8;',
		'iwp-icon-gen_take_from_to': '&#xe9b0;',
		'iwp-icon-gen_text_doc': '&#xe9b1;',
		'iwp-icon-gen_time': '&#xe988;',
		'iwp-icon-gen_typschluessel': '&#xe9b2;',
		'iwp-icon-gen_undo': '&#xe989;',
		'iwp-icon-gen_upload': '&#xe94e;',
		'iwp-icon-gen_vis_part': '&#xe98c;',
		'iwp-icon-gen_warning': '&#xe98d;',
		'iwp-icon-gen_weight': '&#xe98e;',
		'iwp-icon-gen_zoom_in': '&#xe9ba;',
		'iwp-icon-gen_zoom_out': '&#xe9c7;',
		'iwp-icon-gewichtsberechnung': '&#xe9b5;',
		'iwp-icon-gewichtspflege': '&#xe9b6;',
		'iwp-icon-gewichtstabelle': '&#xe9b7;',
		'iwp-icon-iwp_add_app': '&#xe98f;',
		'iwp-icon-iwp_dashboard': '&#xe990;',
		'iwp-icon-iwp_task': '&#xe991;',
		'iwp-icon-light_derivatsauslegung': '&#xe9bb;',
		'iwp-icon-light_gams_fortschreibungsrel': '&#xe9bc;',
		'iwp-icon-light_gebietsrechenregelversion': '&#xe9bd;',
		'iwp-icon-light_lastfalldefinition': '&#xe9be;',
		'iwp-icon-light_open_config': '&#xe9bf;',
		'iwp-icon-light_rechenregel': '&#xe9c0;',
		'iwp-icon-light_search': '&#xe9c1;',
		'iwp-icon-light_select_all_in_grid': '&#xe9ac;',
		'iwp-icon-light_select_lines_in_grid': '&#xe9ad;',
		'iwp-icon-light_status_freigegeben': '&#xe9c2;',
		'iwp-icon-light_status_gesamtfr': '&#xe9c3;',
		'iwp-icon-light_status10_temp': '&#xe9c4;',
		'iwp-icon-light_status12_assessment': '&#xe9c5;',
		'iwp-icon-light_status18_berichtsystemefr': '&#xe9c6;',
		'iwp-icon-mqm': '&#xe992;',
		'iwp-icon-otd': '&#xe993;',
		'iwp-icon-otd2': '&#xe994;',
		'iwp-icon-pmc': '&#xe995;',
		'iwp-icon-pqm': '&#xe996;',
		'iwp-icon-pri_d_letter': '&#xe997;',
		'iwp-icon-pri_doc_background': '&#xe998;',
		'iwp-icon-pri_doc_outline': '&#xe999;',
		'iwp-icon-pri_folder_outline': '&#xe99a;',
		'iwp-icon-pri_st_letters': '&#xe99b;',
		'iwp-icon-pri_vers_background': '&#xe99c;',
		'iwp-icon-pri_vers_outline-08': '&#xe99d;',
		'iwp-icon-pri_vers_outline-10': '&#xe99e;',
		'iwp-icon-pri_vers_x': '&#xe99f;',
		'iwp-icon-pri_vers_x_outline': '&#xe9a0;',
		'iwp-icon-q_search': '&#xe9a1;',
		'iwp-icon-tam': '&#xe9a2;',
		'iwp-icon-tc_aera_edit': '&#xe9c8;',
		'iwp-icon-tc_remove_filter': '&#xe9c9;',
		'iwp-icon-tc_show_aera': '&#xe9ca;',
		'iwp-icon-tc_show_pulk': '&#xe9cb;',
		'iwp-icon-tc_tutorial': '&#xe9cc;',
		'iwp-icon-termin_cockpit': '&#xe9a3;',
		'iwp-icon-twenII': '&#xe94f;',
		'iwp-icon-vaas': '&#xe9a4;',
		'iwp-icon-vrm': '&#xe9a5;',
		'iwp-icon-wissensfinder_search': '&#xe9a6;',
		'iwp-icon-zeb_chart_settings': '&#xe9a7;',
		'iwp-icon-zeb_folder': '&#xe9a8;',
		'iwp-icon-zeb_new_scenario': '&#xe9a9;',
		'iwp-icon-zeb_tab_setup': '&#xe9aa;',
		'iwp-icon-zebra': '&#xe9ab;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/iwp-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
