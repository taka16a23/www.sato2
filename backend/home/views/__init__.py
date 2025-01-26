#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""Name: __init__.py


"""
from home.views.hall_event_model_viewset import HallEventModelViewset
from home.views.main_event_model_viewset import MainEventModelViewset

__all__ = [
    'HallEventModelViewset',
    'MainEventModelViewset',
]



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# __init__.py ends here
