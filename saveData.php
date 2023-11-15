<?php
// saveData.php
require 'vendor/autoload.php'; // If using Composer and PhpSpreadsheet

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

$data = json_decode(file_get_contents('php://input'), true);

$spreadsheet = new Spreadsheet();
$sheet = $spreadsheet->getActiveSheet();

// Add data to the sheet
$sheet->setCellValue('A1', 'Name');
$sheet->setCellValue('B1', 'Email');
$sheet->setCellValue('C1', 'Telegram User');
$sheet->setCellValue('D1', 'Department');
$sheet->setCellValue('E1', 'Stage');

$sheet->fromArray([$data], NULL, 'A2');

$writer = new Xlsx($spreadsheet);
$writer->save('data.xlsx');

echo "Data saved to Excel file.";
?>
