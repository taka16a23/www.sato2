#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""Name: __init__.py


"""
from about.views.rule_book_model_viewset import RuleBookModelViewset
from about.views.hall_receive_model_viewset import HallRequestModelViewset

__all__ = [
    'RuleBookModelViewset',
    'HallRequestModelViewset',
]



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# __init__.py ends here
