#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""Name: __init__.py


"""
from django.contrib import admin

from about.models.rule_book_model import RuleBookModel
from about.models.rule_page_model import RulePageModel
from about.models.hall_request_model import HallRequestModel
from about.models.hall_request_receiver_model import HallRequestReceiverModel
from about.admin.rule_book_model_admin import RuleBookModelAdmin
from about.admin.rule_page_model_admin import RulePageModelAdmin
from about.admin.hall_request_model_admin import HallRequestModelAdmin
from about.admin.hall_request_receiver_model_admin import HallRequestReceiverModelAdmin


__all__ = [
    'RuleBookModelAdmin',
    'RulePageModelAdmin',
    'HallRequestModelAdmin',
    'HallRequestReceiverModelAdmin',
]

admin.site.register(RuleBookModel, RuleBookModelAdmin)
admin.site.register(RulePageModel, RulePageModelAdmin)
admin.site.register(HallRequestModel, HallRequestModelAdmin)
admin.site.register(HallRequestReceiverModel, HallRequestReceiverModelAdmin)



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# __init__.py ends here
