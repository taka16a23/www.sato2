#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""hall_receive_history_model_viewset --

"""
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django.db.models import Q

from about.models import HallRequestHistoryModel
from about.serializers.hall_request_history_model_serializer import HallRequestHistoryModelSerializer


class HallRequestHistoryModelViewset(viewsets.ModelViewSet):
    """HallRequestHistoryModelViewset

    HallRequestHistoryModelViewset is a viewsets.ModelViewSet.
    Responsibility:
    """
    permission_classes = [
        AllowAny
    ]
    http_method_names = ['post', ]
    serializer_class = HallRequestHistoryModelSerializer
    queryset = HallRequestHistoryModel.objects.all()



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# hall_receive_history_model_viewset.py ends here
