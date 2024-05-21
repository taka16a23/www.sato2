#!/usr/bin/env python
# -*- coding: utf-8 -*-
r"""hall_receive_model_viewset --

"""
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from django.db.models import Q

from about.models import HallRequestModel
from about.serializers.hall_request_model_serializer import HallRequestModelSerializer


class HallRequestModelViewset(viewsets.ModelViewSet):
    """HallRequestModelViewset

    HallRequestModelViewset is a viewsets.ModelViewSet.
    Responsibility:
    """
    permission_classes = [
        AllowAny
    ]
    http_method_names = ['post', ]
    serializer_class = HallRequestModelSerializer
    queryset = HallRequestModel.objects.all()

    def post(self, request, *args, **kwargs):

        t_result = super(HallRequestModelViewset, self).post(request, *args, **kwargs)
        t_subject = _("【{}】公民館申込み受付".format(settings.SYSTEM_NAME, ))
        t_email_address = request.data.get('email_address', '')
        t_responsible_person = request.data.get('responsible_person', '')

        return t_result



# For Emacs
# Local Variables:
# coding: utf-8
# End:
# hall_receive_model_viewset.py ends here
