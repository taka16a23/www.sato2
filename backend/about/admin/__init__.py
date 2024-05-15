#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""Name: __init__.py


"""
from django.contrib import admin

from about.models.rule_book_model import RuleBookModel
from about.models.rule_page_model import RulePageModel
from about.models.hall_request_history_model import HallRequestHistoryModel
from about.admin.rule_book_model_admin import RuleBookModelAdmin
from about.admin.rule_page_model_admin import RulePageModelAdmin
from about.models.hall_request_history_model_admin import HallRequestHistoryModelAdmin


__all__ = [
    'RuleBookModelAdmin',
    'RulePageModelAdmin',
    'HallRequestHistoryModelAdmin',
]

admin.site.register(RuleBookModel, RuleBookModelAdmin)
admin.site.register(RulePageModel, RulePageModelAdmin)
admin.site.register(HallRequestHistoryModel, HallRequestHistoryModelAdmin)



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# __init__.py ends here
