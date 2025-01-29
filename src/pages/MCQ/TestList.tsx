

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

export function TestList() {
  const { subject, topic } = useParams();

  // Group tests into 22 parts, each with 5 MCQ tests, and map test IDs to Google Sheets URLs
  const tests = {
    'part-1': [
      { id: 'test1', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
      { id: 'test2', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
      { id: 'test3', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
      { id: 'test4', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
      { id: 'test5', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    ],

    'part-2': [
      { id: 'test6', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
      { id: 'test7', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
      { id: 'test8', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
      { id: 'test9', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
      { id: 'test10', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    ],



  'part-3': [
    { id: 'test11', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=0&single=true&output=csv' },
    { id: 'test12', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test13', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test14', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test15', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-4': [
    { id: 'test16', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test17', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test18', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test19', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test20', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-5': [
    { id: 'test21', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=0&single=true&output=csv' },
    { id: 'test22', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test23', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test24', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test25', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' }


  ],

  'part-6': [
    { id: 'test26', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test27', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test28', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test29', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test30', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-7': [
    { id: 'test31', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test32', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test33', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test34', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test35', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-8': [
    { id: 'test36', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test37', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test38', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test39', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test40', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-9': [
    { id: 'test41', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test42', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test43', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test44', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test45', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-10': [
    { id: 'test46', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test47', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test48', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test49', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test50', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

 'part-11': [
    { id: 'test51', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test52', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test53', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test54', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test55', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-12': [
    { id: 'test56', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test57', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test58', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test59', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test60', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-13': [
    { id: 'test61', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test62', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test63', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test64', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test65', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-14': [
    { id: 'test66', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test67', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test68', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test69', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test70', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-15': [
    { id: 'test71', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test72', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test73', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test74', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test75', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-16': [
    { id: 'test76', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test77', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test78', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test79', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test80', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-17': [
    { id: 'test81', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test82', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test83', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test84', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test85', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

  'part-18': [
    { id: 'test86', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
    { id: 'test87', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test88', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
    { id: 'test89', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
    { id: 'test90', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  ],

'part-19': [
  { id: 'test91', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
  { id: 'test92', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  { id: 'test93', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
  { id: 'test94', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
  { id: 'test95', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
],

'part-20': [
  { id: 'test96', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  { id: 'test97', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
  { id: 'test98', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
  { id: 'test99', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
  { id: 'test100', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
],

'part-21': [
  { id: 'test101', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  { id: 'test102', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
  { id: 'test103', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
  { id: 'test104', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  { id: 'test105', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
],

'part-22': [
  { id: 'test106', title: 'MCQ Test 1', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
  { id: 'test107', title: 'MCQ Test 2', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
  { id: 'test108', title: 'MCQ Test 3', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv' },
  { id: 'test109', title: 'MCQ Test 4', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv' },
  { id: 'test110', title: 'MCQ Test 5', sheetId: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv' },
]

  };

  // Retrieve the tests for the selected part (topic)
  const topicTests = tests[topic || 'part-1']; // Default to part-1 if no topic is selected

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Available Tests for {topic}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topicTests?.map((test) => (
          <Link
            key={test.id}
            to={`/mcq/${subject}/${topic}/${test.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{test.title}</h2>
              <PlayCircle className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-600 mt-2">Click to start the test</p>
          </Link>
        ))}
      </div>
    </div>
  );
}


















// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { PlayCircle } from 'lucide-react';

// export function TestList() {
//   const { subject, topic } = useParams();

//   const tests = [
//     { id: 'test1', title: 'MCQ Test 1' },
//     { id: 'test2', title: 'MCQ Test 2' },
//     { id: 'test3', title: 'MCQ Test 3' },
//     { id: 'test4', title: 'MCQ Test 4' },
//     { id: 'test5', title: 'MCQ Test 5' },
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Available Tests</h1>
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {tests.map((test) => (
//           <Link
//             key={test.id}
//             to={`/mcq/${subject}/${topic}/${test.id}`}
//             className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
//           >
//             <div className="flex items-center justify-between">
//               <h2 className="text-xl font-semibold">{test.title}</h2>
//               <PlayCircle className="w-6 h-6 text-blue-600" />
//             </div>
//             <p className="text-gray-600 mt-2">Click to start the test</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }