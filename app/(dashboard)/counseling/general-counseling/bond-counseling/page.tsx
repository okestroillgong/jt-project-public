'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const buttons = [
  "알림톡/SMS",
  "DM발송",
  "대출조건",
  "여신원장",
  "여신상환",
  "방문등록",
  "거래내역",
  "수정정보",
  "부동산경매정보",
  "조기경보",
  "발급내역",
  "10호서식",
  "7호서식",
  "추심연락제한",
  "채무조정",
  "주소검증",
  "상담등록",
  "특정정보조회",
  "메세지유형",
  "고객관리코드",
];

const implementedButtons = [
    "알림톡/SMS",
    "DM발송",
    "여신원장",
    "거래내역",
    "조기경보",
    "부동산경매정보",
    "발급내역",
    "수정정보",
    "방문등록",
    "추심연락제한",
    "주소검증",
    "상담등록",
    "특정정보조회",
    "메세지유형",
    "고객관리코드",
    "채무조정",
];

export default function BondCounselingPage() {
  const tabId = usePathname();
  const implemented = buttons.filter(b => implementedButtons.includes(b));
  const notImplemented = buttons.filter(b => !implementedButtons.includes(b));

  const renderButton = (label: string) => {
    const isImplemented = implementedButtons.includes(label);
    const isDebtAdjustment = label === "채무조정";
    return (
      <Button
        key={label}
        variant="secondary"
        className={cn(
          "w-[120px] h-[36px] rounded-md text-sm font-medium shadow-sm transition-colors border",
          isImplemented && !isDebtAdjustment
            ? "bg-[#219361] hover:bg-[#1a7a50] text-white border-[#1a7a50]" 
            : isDebtAdjustment
            ? "bg-red-500 hover:bg-red-600 text-white border-red-600"
            : "bg-[#e8e7e3] hover:bg-[#dcdbd7] text-black border-[#d1d0cc]"
        )}
        onClick={() => {
        if (label === "알림톡/SMS") {
          const popupWidth = 1000;
          const popupHeight = 800;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/send-sms',
            'SendSmsPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "DM발송") {
          const popupWidth = 1000;
          const popupHeight = 800;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/send-dm',
            'SendDmPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "여신원장") {
          const popupWidth = 1600;
          const popupHeight = 800;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/credit-ledger',
            'CreditLedgerPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "거래내역") {
          const popupWidth = 1600;
          const popupHeight = 800;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/transaction-history',
            'TransactionHistoryPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "조기경보") {
          const popupWidth = 1200;
          const popupHeight = 800;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/early-warning',
            'EarlyWarningPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "부동산경매정보") {
          const popupWidth = 1400;
          const popupHeight = 800;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/real-estate-auction',
            'RealEstateAuctionPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "발급내역") {
          const popupWidth = 1400;
          const popupHeight = 800;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/issuance-history',
            'IssuanceHistoryPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "수정정보") {
          const popupWidth = 1000;
          const popupHeight = 600;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/correction-history',
            'CorrectionHistoryPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "방문등록") {
          const popupWidth = 800;
          const popupHeight = 400;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/visit-registration',
            'VisitRegistrationPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "추심연락제한") {
          const popupWidth = 1200;
          const popupHeight = 600;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/debt-collection-restriction',
            'DebtCollectionRestrictionPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "주소검증") {
          const popupWidth = 1000;
          const popupHeight = 600;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/address-verification',
            'AddressVerificationPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "상담등록") {
          const popupWidth = 1200;
          const popupHeight = 800;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/counseling-registration',
            'CounselingRegistrationPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "특정정보조회") {
          const popupWidth = 1200;
          const popupHeight = 600;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/specific-info-inquiry',
            'SpecificInfoInquiryPopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "메세지유형") {
          const popupWidth = 1000;
          const popupHeight = 600;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/message-type',
            'MessageTypePopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "고객관리코드") {
          const popupWidth = 1600;
          const popupHeight = 800;
          const left = (window.screen.width / 2) - (popupWidth / 2);
          const top = (window.screen.height / 2) - (popupHeight / 2);
          window.open(
            '/popup/customer-management-code',
            'CustomerManagementCodePopup',
            `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
          );
        } else if (label === "채무조정") {
            const popupWidth = 1600;
            const popupHeight = 900;
            const left = (window.screen.width / 2) - (popupWidth / 2);
            const top = (window.screen.height / 2) - (popupHeight / 2);
            window.open(
                `/popup/debt-adjustment-management?openerTabId=${tabId}`,
                'debt-adjustment-management',
                `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`
            );
        }
      }}
    >
      {label}
    </Button>
    )
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border h-full">
      <h2 className="text-xl font-bold mb-4">채권상담 (테스트)</h2>
      
      <div className="grid grid-cols-3 gap-2 w-fit">
        {implemented.map(label => renderButton(label))}
        {notImplemented.map(label => renderButton(label))}
      </div>
    </div>
  );
}
