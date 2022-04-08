import cookie from 'js-cookie';

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

export const newCookie = () => {
  if (cookie.get('utm_source') !== undefined && cookie.get('utm_medium') !== undefined && cookie.get('utm_campaign') !== undefined && cookie.get('utm_term') !== undefined && cookie.get('clickid') !== undefined) {
    cookie.remove('utm_medium')
    cookie.remove('utm_campaign')
    cookie.remove('utm_source')
    cookie.remove('utm_term')
    cookie.remove('clickid')
  } else if (cookie.get('utm_source') !== undefined && cookie.get('afclick') !== undefined) {
    cookie.remove('utm_source')
    cookie.remove('afclick')
  }else if(cookie.get('utm_source')!== undefined && cookie.get('clickid')!== undefined && cookie.get('wmid')!== undefined){
    cookie.remove('utm_source')
    cookie.remove('clickid')
    cookie.remove('wmid')
  } else if (cookie.get('utm_source') !== undefined) {
    cookie.remove('utm_source')
  } else {
    
  }
}

export const controlUtm = () => {
  if(getUrlParameter('utm_source') === 'rafinad') {
    newCookie();
    localStorage.clear();
    cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
    cookie.set('clickid', getUrlParameter('click_id'), {expires: 30})
    cookie.set('wmid', getUrlParameter('web_id'), {expires: 30})
  }
  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('utm_medium').length > 0 && getUrlParameter('utm_campaign').length > 0 && getUrlParameter('utm_term').length > 0 && getUrlParameter('click_id').length > 0) {
    newCookie()
    if (getUrlParameter('utm_source').includes('qaz')) {
      localStorage.clear();
      cookie.set('utm_source', 'qaz', {expires: 1})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 1})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 1})
      cookie.set('utm_term', getUrlParameter('utm_term'), {expires: 1})
      cookie.set('clickid', getUrlParameter('clickid'), {expires: 1})
    }

    if (getUrlParameter('utm_source').includes('finpublic')) {
      localStorage.clear();
      console.log(getUrlParameter('click_id'))
      cookie.set('clickid', getUrlParameter('click_id'), {expires: 30})
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
      cookie.set('utm_term', getUrlParameter('utm_term'), {expires: 30})
    }
  }
  if (getUrlParameter('utm_source').length > 0 && getUrlParameter('afclick').length > 0) {
    if(getUrlParameter('utm_source') === 'loangate') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('afclick', getUrlParameter('afclick'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('cpa_click_id').length>0 && getUrlParameter('cpa_wm_id').length>0) {
    if(getUrlParameter('utm_source') === 'leadgid') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('clickid', getUrlParameter('cpa_click_id'), {expires: 30})
      cookie.set('wmid', getUrlParameter('cpa_wm_id'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('v').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0 && getUrlParameter('web_id').length>0) {
    if(getUrlParameter('utm_source') === 'doaff') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
      cookie.set('utm_term', getUrlParameter('web_id'), {expires: 30})
      cookie.set('clickid', getUrlParameter('v'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('aff_id').length>0 && getUrlParameter('aff_sub').length>0) {
    if(getUrlParameter('utm_source') === 'sales_doubler') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_term', getUrlParameter('aff_id'), {expires: 30})
      cookie.set('clickid', getUrlParameter('aff_sub'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('clickid').length>0) {
    if(getUrlParameter('utm_source') === 'upsala') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('clickid', getUrlParameter('clickid'), {expires: 30})
      cookie.set('wmid', 'nothing', {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('click_id').length>0) {
    if(getUrlParameter('utm_source') === 'pdl-profit') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('clickid', getUrlParameter('click_id'), {expires: 30})
      cookie.set('wmid', getUrlParameter('web_id'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0
    && getUrlParameter('utm_campaign').length>0 && getUrlParameter('web_id').length>0 && getUrlParameter('click_id').length>0) {
      if(getUrlParameter('utm_source') === 'goodaff') {
        newCookie()
        localStorage.clear()
        cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
        cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
        cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
        cookie.set('utm_term', getUrlParameter('web_id'), {expires: 30})
        cookie.set('clickid', getUrlParameter('click_id'), {expires: 30})

      }
    }
  if (getUrlParameter('utm_source').length > 0) {
    if (getUrlParameter('utm_source').includes('sms')) {
      localStorage.clear();
      newCookie()
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 1})
    }
  }
  if (getUrlParameter('utm_source').length > 0 
    && getUrlParameter('utm_medium').length > 0 
    && getUrlParameter('utm_campaign').length > 0
    && getUrlParameter('utm_term').length > 0 &&
    !getUrlParameter('utm_source').includes('finpublic'))  {
    newCookie()
    localStorage.clear();
    cookie.set('clickid', 'notexist', {expires: 30})
    cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
    cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
    cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    cookie.set('utm_term', getUrlParameter('utm_term'), {expires: 30})
  }

  if(getUrlParameter('_branch_match_id').length>0 && getUrlParameter('utm_medium').length>0) {
    newCookie();
    localStorage.clear();
    cookie.set('utm_source', getUrlParameter('utm_medium'), {expires: 30})
    cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
    cookie.set('utm_campaign', getUrlParameter('utm_medium'), {expires: 30})
    cookie.set('utm_term', getUrlParameter('utm_medium'), {expires: 30})
    cookie.set('clickid', getUrlParameter('_branch_match_id'), {expires: 30})
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('cid').length>0 && getUrlParameter('user').length>0) {
    if(getUrlParameter('utm_source') === 'click2money') {
      newCookie();
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('clickid', getUrlParameter('cid'), {expires: 30})
      cookie.set('wmid', getUrlParameter('user'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_campaign').length>0 && getUrlParameter('clickid').length>0 && getUrlParameter('wm_id').length>0) {
    if(getUrlParameter('utm_campaign') === 'guruleads') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_campaign'), {expires: 30})
      cookie.set('clickid', getUrlParameter('clickid'), {expires: 30})
      cookie.set('wmid', getUrlParameter('wm_id'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_campaign').length>0 && getUrlParameter('utm_medium').length>0){
    if(getUrlParameter('utm_source').includes('risk')) {
      newCookie();
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires:30})
    }
  }
  if(getUrlParameter('affiliate_id').length>0 && getUrlParameter('transaction_id').length>0 && getUrlParameter('utm_source').length>0) {
    if(getUrlParameter('utm_source').includes('leadssu')) {
      newCookie();
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('clickid', getUrlParameter('transaction_id'), {expires: 30})
      cookie.set('wmid', getUrlParameter('affiliate_id'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0) {
    if(getUrlParameter('utm_source') === 'crezu') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('clickid', getUrlParameter('click_id'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0) {
    if(getUrlParameter('utm_source') === 'admitad') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('clickid', getUrlParameter('click_id'), {expires: 30})
    }
  }

  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0) {
    if(getUrlParameter('utm_source') === 'altel_2365') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0) {
    if(getUrlParameter('utm_source') === 'altel_4291') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0) {
    if(getUrlParameter('utm_source') === 'altel_7846') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0) {
    if(getUrlParameter('utm_source') === 'altel_3954') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0) {
    if(getUrlParameter('utm_source') === 'altel_8132') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0) {
    if(getUrlParameter('utm_source') === 'altel_5673') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0) {
    if(getUrlParameter('utm_source') === 'altel_6728') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0) {
    if(getUrlParameter('utm_source') === 'altel_1589') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    }
  }
  if(getUrlParameter('utm_source').length>0 && getUrlParameter('utm_medium').length>0 && getUrlParameter('utm_campaign').length>0) {
    if(getUrlParameter('utm_source') === 'altel_4376') {
      newCookie()
      localStorage.clear();
      cookie.set('utm_source', getUrlParameter('utm_source'), {expires: 30})
      cookie.set('utm_medium', getUrlParameter('utm_medium'), {expires: 30})
      cookie.set('utm_campaign', getUrlParameter('utm_campaign'), {expires: 30})
    }
  }
  else {}
}
